import { UserProvider } from '@auth0/nextjs-auth0/client';

import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
   src: "./ui/fonts/GeistVF.woff",
   variable: "--font-geist-sans",
   weight: "100 900",
});
const geistMono = localFont({
   src: "./ui/fonts/GeistMonoVF.woff",
   variable: "--font-geist-mono",
   weight: "100 900",
});

export const metadata: Metadata = {
   title: "fluência INGLESA",
   description: "Serviços de tradução e aulas de inglês.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
			<UserProvider>
            <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
               {children}
            </body>
			</UserProvider>
      </html>
   );
}
