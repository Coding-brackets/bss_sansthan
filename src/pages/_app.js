import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-toastify/dist/ReactToastify.css";

import { Poppins, Anybody } from "next/font/google";
import Footer from "@/components/commonComponents/Footer";
import Navbar from "@/components/commonComponents/Navbar";
import "@/styles/globals.css";
import MetaTags from "@/data/meta";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
// import OrientationBlock from "@/components/uiComponent/OrientationBlock";

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
   useEffect(() => {
    // GTranslate settings
    window.gtranslateSettings = {
      default_language: "en",
      native_language_names: true,
      detect_browser_language: true,
      languages: ["en", "mr"],
      wrapper_selector: ".gtranslate_wrapper",
    };

    // Load GTranslate script
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`${poppins.variable} ${anybody.variable}`}>
      <MetaTags/>
      <Navbar />
      {/* <OrientationBlock/> */}
      <main>
        <Component {...pageProps} />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </main>
       <div className="gtranslate_wrapper"></div>
      <Footer />
    </div>
  );
}
