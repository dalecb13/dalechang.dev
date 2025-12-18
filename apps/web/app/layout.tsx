import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dale Chang | Product-Minded Engineer",
  description: "I build products people actually use. Software engineer with a founder's mindset.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
