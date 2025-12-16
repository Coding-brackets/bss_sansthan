import History from "@/components/aboutComponent/History";
import Journey from "@/components/aboutComponent/Journey";
import Mentors from "@/components/aboutComponent/Mentors";
// import Mission from "@/components/aboutComponent/Mission";
import Vision from "@/components/aboutComponent/Vision";
import SubPagesHero from "@/components/commonComponents/SubPagesHero";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <SubPagesHero
        heading=" About Us"
        description="BSS is a progressive educational and social organization working towards transforming lives through quality education, advanced ways of learning, employment opportunities in various sectors and community service. With a network of schools and colleges, it empowers students with knowledge and innovation, shaping responsible citizens for a brighter, self-reliant tomorrow."
        bgImage="/assets/aboutHeroBanner.png"
      />
      <History
        image="/assets/bss-history-img.png"
        heading="Our History"
        description={[
          "Bhondekar Shikshan Sanstha, founded in 2002 by Late Shri Bhojrajji Bhondekar, who believed that true progress begins with education, laid the cornerstone of educational reform in the Vidarbha region. BSS started special 3 residential schools and advanced colleges in nursing, physiotherapy and Ayurveda to continually expand opportunities. Guided by a legacy of service, the BSS society now envisions a world-class university and modern educational campus.",
          "Over the decades, BSS has established a strong presence in diverse fields such as in Nursing, Physiotherapy, Ayurveda and Law & Administrative services.",
          "Today, the Sanstha proudly operates multiple schools, including the institutions for specially-abled children, colleges and training institutes, like Puja Nursing College, Bhojrajji Bhondekar Physiotherapy College, PES Hospital and Research Centre and the upcoming Bhojrajji Bhondekar Medical College.",
        ]}
        reverse="true"
      />
      <Journey />
      <Vision
      image="/assets/vision_img.png"
      heading="Our Vision"
        
        description={[
          "To transform the Vidarbha region into a hub of knowledge. With a focus on quality education & employment generation plus community upliftment, the vision is to establish globally respected schools and colleges that nurture intellect and social responsibility, shaping a self-reliant Maharashtra for generations to come.",
          "We aim to set up a world-class group of institutions, to enhance youth employment opportunities, high-tech infrastructure and ensure quality education reaches every corner of society for a prosperous and self-reliant India.",
        ]}
        reverse="true"/>
         <Vision
      image="/assets/leaders.png"
      heading="Our Vision"
        
        description={[
          "we want to empower students through education that blends academic brilliance with moral values and modern technology. The mission focuses primarily on creating opportunities in healthcare, nursing, Law & administrative studies while promoting research and social development, ensuring every learner contributes 100% to the nation’s advancement.",
          "Towards a Brighter Tomorrow with Education and Humanity! Our mission is to uplift every section of society through opportunity. Bhondekar Shikshan Sanstha continues to inspire hope and prosperity for all.",
        ]}
        showQuote="true"
        />
      {/* <Mission
        image="/assets/vision.png"
        heading="Our Vision"

        description={[
          "To transform the Vidarbha region into a hub of knowledge. With a focus on quality education & employment generation plus community upliftment, the vision is to establish globally respected schools and colleges that nurture intellect and social responsibility, shaping a self-reliant Maharashtra for generations to come.",
          "We aim to set up a world-class group of institutions, to enhance youth employment opportunities, high-tech infrastructure and ensure quality education reaches every corner of society for a prosperous and self-reliant India.",
        ]}
        reverse="true"
      />
      <Mission
        image="/assets/mission.png"
        heading="Our Mission"
        description={[
          "We want to empower students through education that blends academic brilliance with moral values and modern technology. The mission focuses primarily on creating opportunities in healthcare, nursing, Law & administrative studies while promoting research and social development, ensuring every learner contributes 100% to the nation’s advancement.",
          "Towards a Brighter Tomorrow with Education and Humanity! Our mission is to uplift every section of society through opportunity. Bhondekar Shikshan Sanstha continues to inspire hope and prosperity for all.",
        ]}
        showQuote="true"
      /> */}
      <Mentors
        img="/assets/founder.png"
        heading="Meet Founders & Mentors Now!"
      />
    </div>
  );
};

export default AboutUs;
