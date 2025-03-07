import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Home/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "./StoreProvider/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
console.log("Clerk Publishable Key:", clerkPubKey);

export const metadata: Metadata = {
  title: "Webdev shop | Next JS",
  description: "Webdev warriors shop using next js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout rendered");

  if (!clerkPubKey) {
    console.error("Fehler: Clerk Publishable Key ist nicht definiert.");
    throw new Error("Clerk Publishable Key is not defined. Please check your environment variables.");
  }

  return (
    <StoreProvider>
      <ClerkProvider publishableKey={clerkPubKey}>
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
