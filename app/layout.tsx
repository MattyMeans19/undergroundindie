import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";


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
      <body className="flex flex-col h-screen overflow-y-clip">
        <ThemeProvider>
          <Header />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
