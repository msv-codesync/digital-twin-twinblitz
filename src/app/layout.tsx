import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Twin Exam Sprint",
  description:
    "Prof. Adele Nasti — 3-day exam prep: Quiz Q1-12, Exercises 1-12, HEEDS, FEM, Antenna RUL project",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DT Exam Sprint",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="gradient-bg antialiased">{children}</body>
    </html>
  );
}
