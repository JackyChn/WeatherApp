import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "City Weather",
  description: "This is a weather app for any city in the world",
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
