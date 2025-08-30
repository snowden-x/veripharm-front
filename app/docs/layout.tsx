import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation - VeriPharm",
  description: "Complete API documentation for the VeriPharm pharmaceutical supply chain verification API",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
