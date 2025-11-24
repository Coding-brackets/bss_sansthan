import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'leaflet/dist/leaflet.css';
import { Poppins, Anybody } from "next/font/google";
import Footer from "@/components/commonComponents/Footer";
import Navbar from "@/components/commonComponents/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import MetaTags from "@/data/meta";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap", 
});

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-anybody",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} ${anybody.variable}`}>
      <MetaTags/>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
