import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanuja Lakshan | Portfolio",
  description: "Data Science Undergraduate & AI Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 'className="dark"' දැමීමෙන් මුළු website එකම ස්ථිරවම Dark Mode එකට හැරේ.
    <html lang="en" className="dark"> 
      <body className={`${inter.className} bg-background text-foreground`}>
        {/* ThemeProvider එක අයින් කරලා කෙලින්ම children විතරක් දැම්මා */}
        {children}
      </body>
    </html>
  );
}