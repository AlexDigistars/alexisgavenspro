import { ImageResponse } from "next/og";

export const alt = "Alexis Gavens · Logiciels métier sur mesure pour PME";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image de partage sobre, aux couleurs du site.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0E1A2B",
          color: "#F6F5F1",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#1D5C57",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            AG
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>Alexis Gavens</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 26, color: "#8FD0C5" }}>Logiciels métier sur mesure pour PME</div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Des logiciels métier qui épousent votre façon de travailler.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
