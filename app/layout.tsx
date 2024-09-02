import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Nav";
//import Style from "@/src/newFolder/Style";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webdev shop | Next JS",
  description: "Webdev warriors shop using next js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
