import JSZip from "jszip";
import { saveAs } from "file-saver";
import QRCode from "qrcode";
import { QrItemV1 } from "./_types";

// Design constants from contract
const DESIGN = {
  foreground: "#0B0B0B",
  background: "#FFFFFF",
  errorCorrectionLevel: "H" as const, // 'L' | 'M' | 'Q' | 'H'
  width: 1024,
  margin: 4, // Modules
};

export async function generateQrDataUrl(text: string): Promise<string> {
  return QRCode.toDataURL(text, {
    errorCorrectionLevel: DESIGN.errorCorrectionLevel,
    margin: 4,
    width: DESIGN.width,
    color: {
      dark: DESIGN.foreground,
      light: DESIGN.background,
    },
  });
}

export async function generateQrSvg(text: string): Promise<string> {
  return QRCode.toString(text, {
    type: "svg",
    errorCorrectionLevel: DESIGN.errorCorrectionLevel,
    margin: 4,
    width: DESIGN.width,
    color: { dark: DESIGN.foreground, light: DESIGN.background },
  });
}

export async function downloadBulkZip(items: QrItemV1[]) {
  const zip = new JSZip();
  const manifestItems = [];

  for (const item of items) {
    // Generate Assets
    const qrSvg = await generateQrSvg(item.url);
    const qrPngDataUrl = await generateQrDataUrl(item.url);
    
    // Add to Zip
    zip.file(`${item.qr_id}.svg`, qrSvg);
    zip.file(`${item.qr_id}.png`, qrPngDataUrl.split(",")[1], { base64: true });

    manifestItems.push({
      qr_id: item.qr_id,
      url: item.url,
      files: {
        svg: `${item.qr_id}.svg`,
        png: `${item.qr_id}.png`
      }
    });
  }

  // Add Manifest
  zip.file("manifest.json", JSON.stringify({
    version: "v1.0",
    exportedAt: new Date().toISOString(),
    count: items.length,
    items: manifestItems
  }, null, 2));

  // Generate Zip
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, `kinly_qr_bulk_${new Date().toISOString().split("T")[0]}.zip`);
}
