import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'leaflet/dist/leaflet.css';

import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/commonComponents/Footer";
import Navbar from "@/components/commonComponents/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import MetaTags from "@/data/meta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <MetaTags/>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
