import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TwinBlitz",
  description: "3-day Digital Twin exam prep — Prof. Adele Nasti theory + Antenna RUL project",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "TwinBlitz" },
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
