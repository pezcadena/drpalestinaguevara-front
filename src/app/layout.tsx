import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Quattrocento } from "next/font/google";
import "@/app/assets/global.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
      <body className={`${inter.className} antialiased`}>
        <main className="p-gap flex flex-col gap-gap max-w-screen-xl mx-auto">
          <Header/>
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
