import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innocent Mariti | Sales Team Leader, Vehicle Sales and F&I",
  description:
    "Vehicle sales team leader with twelve years across Nissan, Mercedes-Benz, a digital-first dealer group and Hyundai. NCA accredited, 133% of target and 90% of deals converted to finance at Hyundai.",
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
