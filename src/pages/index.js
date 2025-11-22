
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import HeroSection from "@/components/homeComponents/HeroSection";
import BssContentSec from "@/components/commonComponents/BssContentSec";
import AboutHighlights from "@/components/homeComponents/AboutHighlights";
import Carousel from "@/components/homeComponents/Carousel";
import Rankings from "@/components/homeComponents/Rankings";
import Success from "@/components/homeComponents/Success";
import Testimonials from "@/components/commonComponents/Testimonials";
import BssStats from "@/components/homeComponents/BssStats";
import NewsAndEvents from "@/components/homeComponents/NewsAndEvents";
import EmpoweringCon from "@/components/homeComponents/EmpoweringCon";
import Colleges from "@/components/homeComponents/Colleges";



export default function Home() {
  return (
    <>
      <HeroSection/>
       <BssContentSec
        image="/assets/doctorimg.png"
        heading="The BSS Legacy"
        description="BSS, Bhandara is an esteemed educational organization committed to transforming society through quality education, healthcare, nursing and employment. The institution offers a wide range of medical and nursing programs that focus on academic excellence, professional ethics, and community service. With experienced faculty, advanced laboratories, and a student-centric approach, BSS is a symbol of trust and excellence in Maharashtra’s healthcare education field."
        points={[
          "Quality of professionalism",
          "Best for nursing courses",
        ]}
        buttonText="Learn More"
        url="/about-us"
      />

      <AboutHighlights/>
      <Carousel/>
      <Rankings/>
      <Success/>
      <Testimonials/>
      <BssStats/>
      <BssContentSec
      image="/assets/doctor1.png"
        heading="Vision & Mission"
        description={[
          "BSS envisions creating compassionate healthcare professionals devoted to human welfare, striving for global excellence in medical and nursing education, research, and service while bringing positive societal change through education, healthcare, and employment opportunities for underprivileged communities."
        ]}
        
        buttonText="Learn More"
          url="/about-us"
        />
        <NewsAndEvents/>
        <EmpoweringCon
        heading="Empowering Disabled Students"
      description={[
        "Education changed my life. With this organization’s help, I could finally study without barriers.’ Education changed my life. With this organization’s help, I could finally study without barriers.’"
      ]}
      ButtonText="Learn More"
       disabledImg="/assets/disabledimg.jpg"/>

       <Colleges/>

      
    
    </>
  );
}
