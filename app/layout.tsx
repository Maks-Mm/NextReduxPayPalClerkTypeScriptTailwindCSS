import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Home/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "./StoreProvider/StoreProvider";
import { Toaster } from "@/components/ui/toaster";


//dashboard  https://dashboard.clerk.com/apps/app_2lZRkFOiSNKdLzL3cNAofU1bVcA/instances/ins_2lZRkJKc1KvKPlsC8JBqPK6SZq7/user-authentication/email-phone-username
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
  console.log("RootLayout gerendert");

  if (!clerkPubKey) {
    console.error("Fehler: Clerk Publishable Key ist nicht definiert."); // Zusätzliche Fehlermeldung
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
