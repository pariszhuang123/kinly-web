import type { Metadata } from "next";

import "./styles/generated/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinly",
  description: "Living together feels lighter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
