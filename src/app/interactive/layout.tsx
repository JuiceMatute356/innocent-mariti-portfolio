import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulse: Interactive Experience",
  description:
    "An interactive web experience with particles, 3D effects, and dynamic animations.",
};

export default function InteractiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-black text-white min-h-screen font-sans overflow-x-hidden"
      style={{ perspective: "1000px" }}
    >
      {children}
    </div>
  );
}
