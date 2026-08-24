import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innocent Mariti | AI Automation Engineer",
  description:
    "n8n automation and production AI systems, backed by 12+ years of compliance-heavy dealership experience. Self-hosted infrastructure, live production metrics.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#1a1a1a] text-[#f5f0e8] min-h-screen font-sans">
      {children}
    </div>
  );
}
