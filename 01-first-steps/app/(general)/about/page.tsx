import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Informacion del proyecto",
  keywords: ["About Page", "Proyecto StarUp", "Informacion"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
