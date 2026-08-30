import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Contactanos via mensaje",
  keywords: ["Correo", "WhastApp", "Email", "Teléfono"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
