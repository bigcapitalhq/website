import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export function renderOgImage() {
  const siteHost = new URL(siteConfig.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050a10",
          color: "#f5f5f5",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#ffffff",
              color: "#050a10",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            B
          </div>

          <div
            style={{
              display: "flex",
              marginLeft: 18,
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              maxWidth: 980,
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
            }}
          >
            AI-native accounting infrastructure
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 820,
              marginTop: 24,
              color: "rgba(245, 245, 245, 0.55)",
              fontSize: 28,
              lineHeight: 1.35,
            }}
          >
            Automated bookkeeping, invoicing, expenses, inventory, and real-time
            financial reporting.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(245, 245, 245, 0.4)",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>
            Open source · Cloud or self-hosted
          </div>
          <div style={{ display: "flex" }}>{siteHost}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
