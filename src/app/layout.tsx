import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jitendra Kumar | Machine Learning Engineer",
  description: "Machine Learning Engineer specializing in RAG Systems, NLP & Computer Vision. Building End-to-End ML Pipelines with Python, Java, and MLOps tools.",
  keywords: ["Machine Learning", "AI", "RAG Systems", "NLP", "Computer Vision", "MLOps", "Python", "Java"],
  authors: [{ name: "Jitendra Kumar" }],
  openGraph: {
    title: "Jitendra Kumar | Machine Learning Engineer",
    description: "Machine Learning Engineer specializing in RAG Systems, NLP & Computer Vision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${raleway.variable} font-sans antialiased bg-[#2d3240]`}
      >
        {children}
      </body>
    </html>
  );
}
