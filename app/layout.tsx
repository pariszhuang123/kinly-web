import type { Metadata } from "next";

import "./styles/generated/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kinly",
    template: "%s • Kinly",
  },
  description: "Living together feels lighter.",
  // optional extras you’ll likely want later:
  // metadataBase: new URL("https://your-domain.com"),
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
