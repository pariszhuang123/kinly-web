import type { Metadata } from "next";

import "./styles/generated/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kinly",
    template: "%s - Kinly",
  },
  description: "Living together feels lighter.",
};

/**
 * Theme initialization script (runs before first paint).
 * Implements theme_resolution_v1 contract.
 */
const themeInitScript = `
(function() {
  try {
    var p = localStorage.getItem('theme');
    if (p !== 'light' && p !== 'dark' && p !== 'system') p = 'system';
    var resolved = p;
    if (p === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.style.colorScheme = resolved;
  } catch (e) {
    var s = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', s);
    document.documentElement.style.colorScheme = s;
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
