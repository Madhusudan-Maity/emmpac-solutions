import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description:
    "Contact EMMPAC Solutions for project discussions, consultancy, inspections, waterproofing & retrofit work, and service inquiries.",
};

export default function Page() {
  return <ContactClient />;
}
