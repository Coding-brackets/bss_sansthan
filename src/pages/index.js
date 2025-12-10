import Image from "next/image";
import HeroSection from "@/components/homeComponents/HeroSection";
import BssContentSec from "@/components/commonComponents/BssContentSec";
import AboutHighlights from "@/components/homeComponents/AboutHighlights";
// import Carousel from "@/components/homeComponents/Carousel";
import Rankings from "@/components/homeComponents/Rankings";
import Success from "@/components/homeComponents/Success";
import Testimonials from "@/components/commonComponents/Testimonials";
import BssStats from "@/components/homeComponents/BssStats";
import NewsAndEvents from "@/components/homeComponents/NewsAndEvents";
import EmpoweringCon from "@/components/homeComponents/EmpoweringCon";
import Colleges from "@/components/homeComponents/Colleges";
import { CustomCarousel } from "@/components/homeComponents/Carousel";
import Graduation from "@/components/svg/graduationCap";
import Certificate from "@/components/svg/Certificate";
import Building from "@/components/svg/Building";
import User from "@/components/svg/User";
import homeData from "@/data/home.json";

const iconMap = {
  graduation: <Graduation />,
  certificate: <Certificate />,
  building: <Building />,
  user: <User />,
};

export default function Home() {
  return (
    <>
      <HeroSection {...homeData.hero} />
      <BssContentSec {...homeData.bssContent} />
      <AboutHighlights cards={homeData.aboutCards} />
      <CustomCarousel />
      <Rankings {...homeData.rankings} />
      <Success {...homeData.success} />
      <Testimonials />
      <BssStats
        stats={homeData.statsData.map((item) => ({
          ...item,
          iconimg: iconMap[item.icon],
        }))}
      />

      <BssContentSec
      {...homeData.visionMission}
      />
      <NewsAndEvents
      {...homeData.newsEvents}
      />
      <EmpoweringCon
      {...homeData.empoweringCon}
      />

      <Colleges colleges={homeData.collegesData} />
    </>
  );
}
