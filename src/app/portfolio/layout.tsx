import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innocent Mariti | Sales Leader & Compliance Professional",
  description:
    "12+ years driving revenue, compliance, and automation across South Africa's leading automotive dealerships. Now building the future of Risk & Compliance.",
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
