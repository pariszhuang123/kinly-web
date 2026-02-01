"use client";

import React, { useEffect, useState } from "react";
import { QrCatalogV1, validateItem, CATALOG_URL } from "../_types";
import { generateQrCardPng, generateQrCardSvg } from "../_utils";
import { saveAs } from "file-saver";
import { KinlyStack, KinlyButton, KinlyText, KinlyHeading } from "../../../../components";
import Image from "next/image";

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
  const [qrPreviewUrl, setQrPreviewUrl] = useState<string | null>(null);

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
    
    // Construct URL
    const baseUrl = `https://go.makinglifeeasie.com/kinly/market/${pageKey}`;
    const url = new URL(baseUrl);
    url.searchParams.set("utm_campaign", utmCampaign);
    url.searchParams.set("utm_medium", "qr");
    url.searchParams.set("utm_source", utmSource);
    
    const fullUrl = url.toString();
    setGeneratedUrl(fullUrl);

    // Generate Preview - use card version
    const preview = await generateQrCardPng(fullUrl, valueStatement || "Shared spending, simplified.");
    setQrPreviewUrl(preview);
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

            <KinlyButton variant="filled" onClick={handleSubmit}>
                Submit & Generate
            </KinlyButton>
        </KinlyStack>

        {qrPreviewUrl && (
            <div style={{ marginTop: "2rem", padding: "2rem", border: "1px solid #eee", background: "#fafafa", borderRadius: "8px" }}>
                <KinlyStack direction="vertical" gap="m" align="center">
                    <div style={{ position: "relative", width: "300px", height: "300px", background: "white", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                        <Image 
                            src={qrPreviewUrl} 
                            alt="QR Code" 
                            fill
                            style={{ objectFit: "contain", imageRendering: "pixelated" }} 
                            unoptimized
                            sizes="300px"
                        />
                    </div>
                    


                    <div style={{ display: "flex", gap: "1rem" }}>
                        <KinlyButton variant="filled" onClick={handleDownloadPng}>
                            PNG (QR)
                        </KinlyButton>
                        <KinlyButton variant="outlined" onClick={handleDownloadSvg}>
                            SVG (QR)
                        </KinlyButton>
                    </div>
                </KinlyStack>
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


