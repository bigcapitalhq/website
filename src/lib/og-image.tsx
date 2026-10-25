import { ImageResponse } from "next/og";
import { ogImageContent } from "@/constants/og";
import { siteConfig } from "@/lib/site";

type OgImageOptions = {
  eyebrow?: string;
  title?: string;
  description?: string;
  footer?: string;
};

export function renderOgImage({
  eyebrow,
  title = ogImageContent.title,
  description = ogImageContent.description,
  footer = ogImageContent.footer,
}: OgImageOptions = {}) {
  const siteHost = new URL(siteConfig.url).host;
  const safeTitle = title.replace(/[—–]/g, "-");
  const titleFontSize =
    safeTitle.length > 72 ? 56 : safeTitle.length > 48 ? 64 : 76;

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
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

          {eyebrow ? (
            <div
              style={{
                display: "flex",
                color: "rgba(245, 245, 245, 0.45)",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "0.2em",
              }}
            >
              {eyebrow}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 980,
              fontSize: titleFontSize,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
            }}
          >
            {safeTitle}
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
            {description}
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
          <div style={{ display: "flex" }}>{footer}</div>
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
