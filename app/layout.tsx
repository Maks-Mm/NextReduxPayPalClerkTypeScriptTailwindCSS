import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Home/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "./StoreProvider/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

//const clerkPubKey = "pk_test_Y3Jpc3AtaWJleC0zMS5jbGVyay5hY2NvdW50cy5kZXYk";
//console.log(clerkPubKey);

export const metadata: Metadata = {
  title: "Webdev shop | Next JS",
  description: "Webdev warriors shop using next js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // <ClerkProvider publishableKey={clerkPubKey} >
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body>
            <Nav />
            {children}
            <Toaster />
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
