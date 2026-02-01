// @vitest-environment jsdom
import { expect, test, vi } from "vitest";
import QRCode from "qrcode";
import { generateQrDataUrl, generateQrSvg } from "../app/tools/qr/_utils";

vi.mock("qrcode");

test("generateQrDataUrl calls QRCode.toDataURL with correct options", async () => {
    const mockToDataURL = vi.mocked(QRCode.toDataURL);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockToDataURL.mockImplementation((() => Promise.resolve("data:image/png;base64,test")) as any);

    const url = "https://example.com";
    const result = await generateQrDataUrl(url);

    expect(mockToDataURL).toHaveBeenCalledWith(url, expect.objectContaining({
        errorCorrectionLevel: "H",
        margin: 4,
        width: 1024,
        color: {
            dark: "#0B0B0B",
            light: "#FFFFFF",
        }
    }));
    expect(result).toBe("data:image/png;base64,test");
});

test("generateQrSvg calls QRCode.toString with correct options", async () => {
    const mockToString = vi.mocked(QRCode.toString);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockToString.mockImplementation((() => Promise.resolve("<svg>test</svg>")) as any);

    const url = "https://example.com";
    const result = await generateQrSvg(url);

    expect(mockToString).toHaveBeenCalledWith(url, expect.objectContaining({
        type: "svg",
        errorCorrectionLevel: "H",
        margin: 4,
        width: 1024,
        color: {
            dark: "#0B0B0B",
            light: "#FFFFFF",
        }
    }));
    expect(result).toBe("<svg>test</svg>");
});
