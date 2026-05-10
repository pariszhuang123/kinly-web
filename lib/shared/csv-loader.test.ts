import { describe, expect, test, vi } from "vitest";

vi.mock("node:fs/promises", () => ({
  readFile: vi.fn(),
}));

import { readFile } from "node:fs/promises";
import { loadCsv } from "./csv-loader";

describe("csv-loader", () => {
  test("parses quoted values, escaped quotes, and blank cells", async () => {
    vi.mocked(readFile).mockResolvedValue(
      [
        "name,comment,amount",
        "\"Ava\",\"Hello, world\",10",
        "\"Noah\",\"He said \"\"hi\"\"\",",
      ].join("\n"),
    );

    await expect(loadCsv("mock.csv")).resolves.toEqual([
      { name: "Ava", comment: "Hello, world", amount: "10" },
      { name: "Noah", comment: "He said \"hi\"", amount: "" },
    ]);
  });

  test("returns an empty array when the file has no rows", async () => {
    vi.mocked(readFile).mockResolvedValue("\n\n");

    await expect(loadCsv("empty.csv")).resolves.toEqual([]);
  });
});
