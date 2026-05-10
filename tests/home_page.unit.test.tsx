import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test } from "vitest";

import HomePage from "../app/page";

describe("company home page", () => {
  test("renders the public link hub with primary destinations", () => {
    const markup = renderToStaticMarkup(<HomePage />);

    expect(markup).toContain("Quick links");
    expect(markup).toContain('href="/withyou"');
    expect(markup).toContain('href="/kinly/general"');
    expect(markup).toContain('href="/tools/qr"');
    expect(markup).toContain('href="/portfolio/evnex-control-tower"');
    expect(markup).toContain('href="/portfolio/contractor-negotiation-playbook"');
  });
});
