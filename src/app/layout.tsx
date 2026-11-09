import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prashanth Rajenderan | Senior DevOps & Data Platform Engineer",
  description: "Cloud Engineering Command Center showcasing multi-cloud platforms, GitOps, Kubernetes, and AI-powered infrastructure automation.",
  keywords: ["DevOps", "Cloud Architect", "AWS", "Azure", "GCP", "Kubernetes", "GitOps", "Terraform", "Prashanth Rajenderan"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080D18] text-[#F8FAFC] selection:bg-[#38BDF8] selection:text-black">
        {children}
      </body>
    </html>
  );
}
