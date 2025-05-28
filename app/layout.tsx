import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import {Poppins} from 'next/font/google'
import "./globals.css";
import MobileNav from "./components/Navbar/MobileNav";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/Helper/ScrollTop";
 
const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

{/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/}

export const metadata: Metadata = {
  title: "Travel for you | Next js ",
  description: "Travel Landing page using next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${font.className} antialiased`}
      >
          <ResponsiveNav/>
        {children}
          <Footer/>
          <ScrollTop/>
      </body>
    </html>
  );
}
