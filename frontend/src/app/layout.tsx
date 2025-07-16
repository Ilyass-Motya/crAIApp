import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyrvus SAS - Security as a Service",
  description: "Professional cybersecurity solutions and security as a service. Protect your business with enterprise-grade security services, threat detection, and compliance management.",
  keywords: ["cybersecurity", "security as a service", "SaaS", "threat detection", "compliance", "enterprise security"],
  authors: [{ name: "Cyrvus SAS" }],
  creator: "Cyrvus SAS",
  publisher: "Cyrvus SAS",
  metadataBase: new URL("https://cyrvus.com"),
  openGraph: {
    title: "Cyrvus SAS - Security as a Service",
    description: "Professional cybersecurity solutions and security as a service",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyrvus SAS - Security as a Service",
    description: "Professional cybersecurity solutions and security as a service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
