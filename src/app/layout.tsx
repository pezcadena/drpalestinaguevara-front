import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Quattrocento } from "next/font/google";
import "@/app/assets/global.css";

const inter = Inter({ subsets: ["latin"] });
const quattrocento = Quattrocento({
  weight:["400","700"],
  subsets: ['latin'],
  variable: '--font-quattrocento',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quattrocento.variable} font-serif`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
