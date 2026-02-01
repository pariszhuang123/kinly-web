// @vitest-environment jsdom
import { expect, test, vi } from "vitest";
import QRCode from "qrcode";
import { generateQrDataUrl, generateQrSvg, generateQrCardPng, generateQrCardSvg } from "../app/tools/qr/_utils";

vi.mock("qrcode");

test("generateQrDataUrl calls QRCode.toDataURL with correct options", async () => {
    const mockToDataURL = vi.mocked(QRCode.toDataURL);
    mockToDataURL.mockImplementation((() => Promise.resolve("data:image/png;base64,test")) as unknown as typeof QRCode.toDataURL);

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
    mockToString.mockImplementation((() => Promise.resolve("<svg>test</svg>")) as unknown as typeof QRCode.toString);

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

test("generateQrCardPng combines QR and text", async () => {
    // Mock canvas globally for this test
    const mockCanvas = {
        getContext: vi.fn(() => ({
            font: "",
            measureText: vi.fn(() => ({ width: 100 })),
            fillRect: vi.fn(),
            drawImage: vi.fn(),
            fillText: vi.fn(),
            toDataURL: vi.fn(() => "data:image/png;base64,card"),
        })),
        width: 0,
        height: 0,
        toDataURL: vi.fn(() => "data:image/png;base64,card"),
    };
    vi.stubGlobal("document", {
        createElement: vi.fn((tag: string) => (tag === "canvas" ? mockCanvas : {})),
    });
    vi.stubGlobal("Image", class {
        onload: () => void = () => {};
        set src(_val: string) { 
          setTimeout(() => this.onload(), 0); 
        }
    });

    const result = await generateQrCardPng("https://example.com", "Test Statement");
    expect(result).toBe("data:image/png;base64,card");
});

test("generateQrCardSvg wraps QR in card SVG", async () => {
    const mockToString = vi.mocked(QRCode.toString);
    mockToString.mockImplementation((() => Promise.resolve("<svg>qr</svg>")) as unknown as typeof QRCode.toString);

    const result = await generateQrCardSvg("https://example.com", "Test Statement");
    expect(result).toContain("<svg");
    expect(result).toContain("Test Statement");
    expect(result).toContain("<tspan");
    expect(result).toContain("Made with Kinly. Together feels Lighter");
});
