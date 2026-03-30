import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexus: The Platform Teams Trust",
  description:
    "Nexus helps 10,000+ teams ship faster with less friction. Start free today.",
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {children}
    </div>
  );
}
