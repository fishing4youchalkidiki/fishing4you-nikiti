import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ff6b35",
          color: "#071b2f",
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: "-1px",
          borderRadius: 16,
        }}
      >
        F4Y
      </div>
    ),
    size,
  );
}
