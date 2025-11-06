import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "@/components/commonComponents/Footer";
import Navbar from "@/components/commonComponents/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  );
}
