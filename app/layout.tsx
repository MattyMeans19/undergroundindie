import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";


export const metadata: Metadata = {
  title: "UnderGroundIndie",
  description: "A social platform landing page for Underground Indie creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`font-tech h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
