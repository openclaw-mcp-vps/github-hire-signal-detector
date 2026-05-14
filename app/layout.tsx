import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Hire Signal Detector – Find Developers Open to Opportunities",
  description: "Scan GitHub activity patterns to identify developers who might be open to job opportunities. Built for technical recruiters and startup founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="db242646-9a87-4134-8b2d-c5d1ae058c84"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
