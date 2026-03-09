import type { ReactElement } from "react";
import { beforeEach, expect, test, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

const resolvePublicNormsMock = vi.fn();
const notFoundMock = vi.fn(() => {
  throw new Error("NEXT_NOT_FOUND");
});
const headersMock = vi.fn();

vi.mock("../lib/houseNormsPublic", () => ({
  resolvePublicNorms: (...args: unknown[]) => resolvePublicNormsMock(...args),
}));

vi.mock("next/navigation", () => ({
  notFound: () => notFoundMock(),
}));

vi.mock("next/headers", () => ({
  headers: () => headersMock(),
}));

import PublicNormsPage, { generateMetadata } from "../app/kinly/norms/[homePublicId]/page";

beforeEach(() => {
  resolvePublicNormsMock.mockReset();
  notFoundMock.mockClear();
  headersMock.mockReset();
  headersMock.mockResolvedValue({
    get: (name: string) => (name.toLowerCase() === "accept-language" ? "en-US,en;q=0.9" : null),
  });
});

test("renders published summary and section content", async () => {
  resolvePublicNormsMock.mockResolvedValue({
    available: true,
    source: "storage",
    data: {
      homePublicId: "abc12345",
      publishedAt: "2026-02-17T00:00:00.000Z",
      publishedVersion: "v000001",
      localeBase: "en",
      templateKey: "house_norms_v1",
      publishedContent: {
        summary: {
          title: "House norms",
          subtitle: "A shared starting point - not a rulebook.",
          framing: "We try to keep shared spaces reset after meals.",
        },
        sections: [
          {
            title: "Shared spaces",
            text: "We usually reset shared spaces after use.",
          },
        ],
      },
    },
  });

  const element = await PublicNormsPage({
    params: Promise.resolve({ homePublicId: "abc12345" }),
  });
  const html = renderToStaticMarkup(element as ReactElement);

  expect(html).toContain("House norms");
  expect(html).toContain("A shared starting point - not a rulebook.");
  expect(html).toContain("Shared spaces");
  expect(html).toContain("We usually reset shared spaces after use.");
  expect(resolvePublicNormsMock).toHaveBeenCalledWith("abc12345", "en");
});

test("calls notFound when norms are unavailable", async () => {
  resolvePublicNormsMock.mockResolvedValue({
    available: false,
  });

  await expect(
    PublicNormsPage({
      params: Promise.resolve({ homePublicId: "abc12345" }),
    }),
  ).rejects.toThrow("NEXT_NOT_FOUND");
  expect(notFoundMock).toHaveBeenCalled();
});

test("does not render owner controls", async () => {
  resolvePublicNormsMock.mockResolvedValue({
    available: true,
    source: "rpc",
    data: {
      homePublicId: "abc12345",
      publishedAt: "2026-02-17T00:00:00.000Z",
      publishedVersion: "v000001",
      localeBase: "en",
      publishedContent: {
        summary: {
          title: "House norms",
          subtitle: "A shared starting point - not a rulebook.",
        },
        sections: [
          {
            title: "Guests",
            text: "A heads-up usually works well for visitors.",
          },
        ],
      },
    },
  });

  const element = await PublicNormsPage({
    params: Promise.resolve({ homePublicId: "abc12345" }),
  });
  const html = renderToStaticMarkup(element as ReactElement);

  expect(html).not.toContain("Edit");
  expect(html).not.toContain("Publish");
  expect(html).not.toContain("Comment");
});

test("generateMetadata uses published summary title and subtitle", async () => {
  headersMock.mockResolvedValue({
    get: (name: string) => (name.toLowerCase() === "accept-language" ? "es-MX,es;q=0.8" : null),
  });

  resolvePublicNormsMock.mockResolvedValue({
    available: true,
    source: "storage",
    data: {
      homePublicId: "abc12345",
      publishedAt: "2026-02-17T00:00:00.000Z",
      publishedVersion: "v000001",
      localeBase: "en",
      publishedContent: {
        summary: {
          title: "House norms",
          subtitle: "A shared starting point - not a rulebook.",
        },
      },
    },
  });

  const metadata = await generateMetadata({
    params: Promise.resolve({ homePublicId: "abc12345" }),
  });

  expect(metadata.title).toBe("House norms | Kinly");
  expect(metadata.description).toBe("A shared starting point - not a rulebook.");
  expect(resolvePublicNormsMock).toHaveBeenCalledWith("abc12345", "es");
});

test("renders sections when published_content.sections is an object map", async () => {
  resolvePublicNormsMock.mockResolvedValue({
    available: true,
    source: "storage",
    data: {
      homePublicId: "abc12345",
      publishedAt: "2026-02-17T00:00:00.000Z",
      publishedVersion: "v000001",
      localeBase: "en",
      publishedContent: {
        summary: {
          framing: "We aim for a calm and workable home.",
        },
        context: {
          line: "This is a rented whole home shared by family.",
        },
        sections: {
          norms_repair_style: {
            title: "Repair style",
            text: "We try to talk sooner rather than later.",
          },
          norms_shared_spaces: {
            title: "Shared spaces",
            text: "We reset shared spaces when it makes sense.",
          },
        },
      },
    },
  });

  const element = await PublicNormsPage({
    params: Promise.resolve({ homePublicId: "abc12345" }),
  });
  const html = renderToStaticMarkup(element as ReactElement);

  expect(html.indexOf("Shared spaces")).toBeLessThan(html.indexOf("Repair style"));
  expect(html).toContain("Shared spaces");
  expect(html).toContain("We reset shared spaces when it makes sense.");
  expect(html).toContain("Repair style");
  expect(html).toContain("We try to talk sooner rather than later.");
});

test("calls notFound when published content has no renderable norms text", async () => {
  resolvePublicNormsMock.mockResolvedValue({
    available: true,
    source: "rpc",
    data: {
      homePublicId: "abc12345",
      publishedAt: "2026-02-17T00:00:00.000Z",
      publishedVersion: "v000001",
      localeBase: "en",
      publishedContent: {},
    },
  });

  await expect(
    PublicNormsPage({
      params: Promise.resolve({ homePublicId: "abc12345" }),
    }),
  ).rejects.toThrow("NEXT_NOT_FOUND");
  expect(notFoundMock).toHaveBeenCalled();
});
