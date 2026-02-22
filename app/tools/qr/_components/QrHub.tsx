"use client";

import React, { useEffect, useState } from "react";
import { QrCatalogV1, validateItem, CATALOG_URL } from "../_types";
import { generateQrCardPng, generateQrCardSvg } from "../_utils";
import { saveAs } from "file-saver";
import { KinlyStack, KinlyButton, KinlyText, KinlyHeading, KinlyLink } from "../../../../components";
import Image from "next/image";
import { buildQrDestination, extractShortCode } from "../../../../lib/qrShortLink";

export default function QrHub() {
  const [catalog, setCatalog] = useState<QrCatalogV1 | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [selectedId, setSelectedId] = useState("");
  const [pageKey, setPageKey] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [valueStatement, setValueStatement] = useState("");

  // Generation State
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [generatedShortCode, setGeneratedShortCode] = useState<string | null>(null);
  const [qrPreviewUrl, setQrPreviewUrl] = useState<string | null>(null);
  const [generationWarning, setGenerationWarning] = useState<string | null>(null);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Load Catalog
  useEffect(() => {
    fetch(CATALOG_URL)
      .then((res) => res.json())
      .then((data: QrCatalogV1) => {
        if (data.version !== "v1.0") {
          setError("Unsupported catalog version");
          return;
        }
        const validItems = data.items.filter(item => validateItem(item).valid);
        setCatalog({ ...data, items: validItems });
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load catalog: " + err.message);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async () => {
    if (!pageKey || !utmCampaign || !utmSource) return;

    setIsGenerating(true);
    setGenerationWarning(null);
    setCopyStatus("idle");

    try {
      const { fallbackUrl, payload } = buildQrDestination({
        pageKey,
        utmCampaign,
        utmSource,
      });

      let finalUrl = fallbackUrl;
      let finalShortCode: string | null = null;

      try {
        const response = await fetch("/api/tools/qr/short-link", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = (await response.json().catch(() => null)) as
          | { ok?: boolean; short_url?: string; short_code?: string | null }
          | null;

        if (response.ok && data?.ok && typeof data.short_url === "string" && data.short_url.trim()) {
          finalUrl = data.short_url.trim();
          finalShortCode =
            typeof data.short_code === "string" && data.short_code.trim()
              ? data.short_code.trim().toLowerCase()
              : extractShortCode(finalUrl);
        } else {
          setGenerationWarning("Short link unavailable, using full URL.");
        }
      } catch {
        setGenerationWarning("Short link unavailable, using full URL.");
      }

      setGeneratedUrl(finalUrl);
      setGeneratedShortCode(finalShortCode);

      const preview = await generateQrCardPng(finalUrl, valueStatement || "Shared spending, simplified.");
      setQrPreviewUrl(preview);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPng = async () => {
    if (!generatedUrl || !selectedId) return;
    const png = await generateQrCardPng(generatedUrl, valueStatement || "Shared spending, simplified.");
    saveAs(png, `${selectedId || "qr_code"}_card.png`);
  };

  const handleDownloadSvg = async () => {
    if (!generatedUrl || !selectedId) return;
    const svgContent = await generateQrCardSvg(generatedUrl, valueStatement || "Shared spending, simplified.");
    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    saveAs(blob, `${selectedId || "qr_code"}_card.svg`);
  };

  const handleCopyUrl = async () => {
    if (!generatedUrl) return;
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  };

  if (loading) return <div style={{ padding: 40 }}>Loading Tools...</div>;
  if (error) return <div style={{ padding: 40, color: "red" }}>Error: {error}</div>;

  // Uniques for dropdowns
  const items = catalog?.items || [];
  const options = catalog?.options;

  const qrIds = Array.from(new Set(items.map(i => i.qr_id))).sort();
  
  const pageKeyOptions = options?.pageKeys || [];
  const itemsPageKeys = items.map(i => i.pageKey);
  const allPageKeys = Array.from(new Set([
    ...itemsPageKeys,
    ...pageKeyOptions.map(o => o.key)
  ])).sort();

  const campaigns = Array.from(new Set([
    ...(items.map(i => i.utm_campaign)),
    ...(options?.utm_campaigns || [])
  ])).sort();

  const sources = Array.from(new Set([
    ...(items.map(i => i.utm_source)),
    ...(options?.utm_sources || [])
  ])).sort();

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem 0" }}>
      <KinlyStack direction="vertical" gap="l">
        <KinlyHeading level={2}>Generate QR Code</KinlyHeading>
        
        <KinlyStack direction="vertical" gap="m">
            {/* QR ID Selection (Template) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <KinlyText variant="labelMedium">QR ID (Template)</KinlyText>
                <select 
                    value={selectedId}
                    onChange={(e) => {
                      const newId = e.target.value;
                      setSelectedId(newId);
                      const item = catalog?.items.find(i => i.qr_id === newId);
                      if (item) {
                        setPageKey(item.pageKey);
                        setUtmCampaign(item.utm_campaign);
                        setUtmSource(item.utm_source);
                        setValueStatement(item.valueStatement || "");
                      }
                    }}
                    style={inputStyle}
                >
                    <option value="">-- Select QR ID --</option>
                    {qrIds.map(id => <option key={id} value={id}>{id}</option>)}
                </select>
            </div>

            {/* Page Key */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <KinlyText variant="labelMedium">Page Key</KinlyText>
                <select 
                    value={pageKey}
                    onChange={(e) => {
                      const val = e.target.value;
                      setPageKey(val);
                      const opt = pageKeyOptions.find(o => o.key === val);
                      if (opt) {
                        setValueStatement(opt.valueStatement);
                      }
                    }}
                    style={inputStyle}
                >
                    <option value="">-- Select Page --</option>
                    {allPageKeys.map(k => <option key={k} value={k}>{k}</option>)}
                </select>
            </div>

             {/* Campaign */}
             <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <KinlyText variant="labelMedium">UTM Campaign</KinlyText>
                <select 
                    value={utmCampaign}
                    onChange={(e) => setUtmCampaign(e.target.value)}
                    style={inputStyle}
                >
                    <option value="">-- Select Campaign --</option>
                    {campaigns.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>

             {/* Source */}
             <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <KinlyText variant="labelMedium">UTM Source</KinlyText>
                <select 
                    value={utmSource}
                    onChange={(e) => setUtmSource(e.target.value)}
                    style={inputStyle}
                >
                    <option value="">-- Select Source --</option>
                    {sources.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>

            <KinlyButton variant="filled" onClick={handleSubmit} disabled={isGenerating}>
                {isGenerating ? "Generating..." : "Submit & Generate"}
            </KinlyButton>
        </KinlyStack>

        {generationWarning && (
            <KinlyText variant="bodySmall" tone="danger">
                {generationWarning}
            </KinlyText>
        )}

        {qrPreviewUrl && (
            <div style={{ marginTop: "2rem", padding: "2rem", border: "1px solid #eee", background: "#fafafa", borderRadius: "8px" }}>
                <KinlyStack direction="vertical" gap="m" align="center">
                    <div 
                        onClick={() => setIsFullscreen(true)}
                        style={{ 
                            position: "relative", 
                            width: "300px", 
                            height: "300px", 
                            background: "white", 
                            padding: "1rem", 
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            cursor: "pointer"
                        }}
                    >
                        <Image 
                            src={qrPreviewUrl} 
                            alt="QR Code" 
                            fill
                            style={{ objectFit: "contain", imageRendering: "pixelated" }} 
                            unoptimized
                            sizes="300px"
                        />
                    </div>
                    <KinlyText variant="bodySmall">Tap to expand</KinlyText>
                </KinlyStack>
            </div>
        )}

        {generatedUrl && (
            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {generatedShortCode && (
                    <KinlyText variant="labelMedium">
                        Short code: <code>{generatedShortCode}</code>
                    </KinlyText>
                )}
                <KinlyText variant="labelMedium">Share URL</KinlyText>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <code style={{ 
                    flex: 1, 
                    padding: "8px 12px", 
                    background: "transparent",
                    border:
                      "1px solid color-mix(in srgb, var(--color-semantic-outline, #b7c7c0) 70%, transparent)",
                    borderRadius: "4px",
                    fontSize: "12px",
                    wordBreak: "break-all",
                    color: "var(--color-on-surface, #111)"
                }}>
                    <KinlyLink href={generatedUrl} external>
                        <span style={{ wordBreak: "break-all" }}>{generatedUrl}</span>
                    </KinlyLink>
                </code>
                <KinlyButton
                    variant="outlined"
                    onClick={handleCopyUrl}
                >
                    Copy URL
                </KinlyButton>
                </div>
                {copyStatus === "copied" && (
                    <KinlyText variant="bodySmall">Copied.</KinlyText>
                )}
                {copyStatus === "failed" && (
                    <KinlyText variant="bodySmall" tone="danger">
                        Could not copy. Copy manually from the link.
                    </KinlyText>
                )}
            </div>
        )}

        {qrPreviewUrl && (
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                <KinlyButton variant="filled" onClick={handleDownloadPng}>
                    PNG (QR)
                </KinlyButton>
                <KinlyButton variant="outlined" onClick={handleDownloadSvg}>
                    SVG (QR)
                </KinlyButton>
            </div>
        )}

        {isFullscreen && qrPreviewUrl && (
            <div 
                onClick={() => setIsFullscreen(false)}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999,
                    cursor: "pointer"
                }}
            >
                <div style={{ position: "relative", width: "90vmin", height: "90vmin", maxWidth: "600px", maxHeight: "600px" }}>
                    <Image 
                        src={qrPreviewUrl} 
                        alt="QR Code Fullscreen" 
                        fill
                        style={{ objectFit: "contain", imageRendering: "pixelated" }} 
                        unoptimized
                        sizes="90vmin"
                    />
                </div>
            </div>
        )}


      </KinlyStack>
    </div>
  );
}

const inputStyle = {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    width: "100%"
};
