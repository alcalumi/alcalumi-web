"use client";

/* eslint-disable @next/next/no-img-element */

export default function Logo({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  const heights = { sm: 44, md: 60, lg: 80 };
  const h = heights[size];

  return (
    <img
      src="/logo.png"
      alt="Alcalumi"
      height={h}
      style={{ height: h, width: "auto" }}
    />
  );
}
