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
  cardPadding: 80,
  fontSize: 48,
  lineHeight: 60,
  taglineSize: 36,
  taglineColor: "#666666",
};

const TAGLINE = "Made with Kinly. Together feels Lighter";

function drawTextWrapped(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  align: CanvasTextAlign = "center"
) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;

  ctx.textAlign = align;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, currentY);
      line = words[n] + " ";
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
  return currentY + lineHeight;
}

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

export async function generateQrCardPng(text: string, valueStatement: string): Promise<string> {
  const qrDataUrl = await generateQrDataUrl(text);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not get canvas context");

  const qrSize = DESIGN.width;
  const padding = DESIGN.cardPadding;
  const maxWidth = qrSize;

  // Measure text
  ctx.font = `bold ${DESIGN.fontSize}px Inter, sans-serif`;
  const words = valueStatement.split(" ");
  let line = "";
  let lineCount = 1;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      line = words[n] + " ";
      lineCount++;
    } else {
      line = testLine;
    }
  }

  const textHeight = lineCount * DESIGN.lineHeight;
  const taglineHeight = DESIGN.taglineSize * 2;
  const cardWidth = qrSize + padding * 2;
  const cardHeight = qrSize + padding * 4 + textHeight + taglineHeight;

  canvas.width = cardWidth;
  canvas.height = cardHeight;

  // Fill background
  ctx.fillStyle = DESIGN.background;
  ctx.fillRect(0, 0, cardWidth, cardHeight);

  // Draw QR
  const qrImg = new Image();
  qrImg.src = qrDataUrl;
  await new Promise((resolve) => (qrImg.onload = resolve));
  ctx.drawImage(qrImg, padding, padding, qrSize, qrSize);

  // Draw Value Statement
  ctx.fillStyle = DESIGN.foreground;
  ctx.font = `bold ${DESIGN.fontSize}px Inter, sans-serif`;
  ctx.textBaseline = "top";
  drawTextWrapped(ctx, valueStatement, cardWidth / 2, qrSize + padding * 2, maxWidth, DESIGN.lineHeight, "center");

  // Draw Tagline centered at the bottom
  ctx.fillStyle = DESIGN.taglineColor;
  ctx.font = `${DESIGN.taglineSize}px Inter, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const taglineY = qrSize + padding * 3 + textHeight + DESIGN.taglineSize;
  ctx.fillText(TAGLINE, cardWidth / 2, taglineY);

  return canvas.toDataURL("image/png");
}

export async function generateQrCardSvg(text: string, valueStatement: string): Promise<string> {
  const qrSvg = await generateQrSvg(text);
  const qrSize = DESIGN.width;
  const padding = DESIGN.cardPadding;
  const fontSize = DESIGN.fontSize;
  const lineHeight = DESIGN.lineHeight;

  const charsPerLine = Math.floor(qrSize / (fontSize * 0.5));
  const words = valueStatement.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    if ((currentLine + word).length > charsPerLine) {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    } else {
      currentLine += word + " ";
    }
  });
  lines.push(currentLine.trim());

  const textHeight = lines.length * lineHeight;
  const taglineHeight = DESIGN.taglineSize * 2;
  const cardWidth = qrSize + padding * 2;
  const cardHeight = qrSize + padding * 4 + textHeight + taglineHeight;

  const qrContent = qrSvg.replace(/<\?xml.*\?>/, "").replace(/<!DOCTYPE.*>/, "");

  const svg = `
<svg width="${cardWidth}" height="${cardHeight}" viewBox="0 0 ${cardWidth} ${cardHeight}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${DESIGN.background}" />
  <g transform="translate(${padding}, ${padding})">
    ${qrContent}
  </g>
  <text 
    x="${cardWidth / 2}" 
    y="${qrSize + padding * 2}" 
    font-family="Inter, sans-serif" 
    font-size="${fontSize}" 
    font-weight="bold" 
    fill="${DESIGN.foreground}" 
    text-anchor="middle"
    dominant-baseline="hanging"
  >
    ${lines.map((line, i) => `<tspan x="${cardWidth / 2}" dy="${i === 0 ? 0 : lineHeight}">${line}</tspan>`).join("")}
  </text>
  
  <text 
    x="${cardWidth / 2}" 
    y="${qrSize + padding * 3 + textHeight + DESIGN.taglineSize}" 
    font-family="Inter, sans-serif" 
    font-size="${DESIGN.taglineSize}" 
    fill="${DESIGN.taglineColor}"
    text-anchor="middle"
    dominant-baseline="middle"
  >${TAGLINE}</text>
</svg>
  `.trim();

  return svg;
}

export async function downloadBulkZip(items: QrItemV1[]) {
  const zip = new JSZip();
  const manifestItems = [];

  for (const item of items) {
    const valueStatement = item.valueStatement || "Shared spending, simplified.";
    
    // Generate Assets
    const qrSvg = await generateQrSvg(item.url);
    const qrPngDataUrl = await generateQrDataUrl(item.url);
    const cardSvg = await generateQrCardSvg(item.url, valueStatement);
    const cardPng = await generateQrCardPng(item.url, valueStatement);
    
    // Add to Zip
    zip.file(`${item.qr_id}.svg`, qrSvg);
    zip.file(`${item.qr_id}.png`, qrPngDataUrl.split(",")[1], { base64: true });
    zip.file(`${item.qr_id}_card.svg`, cardSvg);
    zip.file(`${item.qr_id}_card.png`, cardPng.split(",")[1], { base64: true });

    manifestItems.push({
      qr_id: item.qr_id,
      url: item.url,
      valueStatement: valueStatement,
      files: {
        svg: `${item.qr_id}.svg`,
        png: `${item.qr_id}.png`,
        card_svg: `${item.qr_id}_card.svg`,
        card_png: `${item.qr_id}_card.png`
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
