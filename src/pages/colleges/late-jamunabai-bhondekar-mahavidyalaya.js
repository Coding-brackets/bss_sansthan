import CollegeGallery from "@/components/collegeComponents/CollegeGallery";
import CollegeConSec from "@/components/collegeComponents/collegesConSec";
import HeroSection from "@/components/collegeComponents/HeroSection";
import QuoteComponent from "@/components/collegeComponents/quoteComponent";
import React from "react";

const SantGadgeBabamadhyamik = () => {
  return (
    <div>
      <HeroSection
        subHeadingCon="Welcome to"
        heading="Late Jamunabai Bhondekar Mahavidyalaya Navegaon"
        bgImage="/assets/heroImages/sant-gadge-baba-madhyamik-shala.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/sant-Gadge-baba-madhyamik/school.png"
        heading="Come and Discover Late Jamunabai Bhondekar Mahavidyalaya Navegaon"
        description={[
          "Late Jamunabai Bhondekar Mahavidyalaya Navegaon provides a strong platform for higher education, guiding students as they work toward meaningful careers and personal growth. The college blends clear instruction and regular mentorship so students can understand their subjects with full confidence and apply their own knowledge in real situations. ",
          "Students receive support for competitive exams and overall personality shaping, helping them stand out in today’s world. We motivate students to explore new fields and connect with opportunities that match their goals. With steady guidance and a focus on real-world readiness, the college prepares young adults to move forward with clarity and purpose. ",
          "Discover how students here build strong abilities and move closer to the careers they dream of",
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
        para="Discover how our students learn and grow by browsing the pictures in our gallery.
"
        images={[
          "/assets/CollegesImg/sant-Gadge-baba-madhyamik/ljbm.jpeg",
          "/assets/CollegesImg/sant-Gadge-baba-madhyamik/ljbm1.jpeg",
          "/assets/CollegesImg/sant-Gadge-baba-madhyamik/ljbm2.jpeg",
          "/assets/CollegesImg/sant-Gadge-baba-madhyamik/ljbm3.jpeg",
          "/assets/CollegesImg/sant-Gadge-baba-madhyamik/ljbm4.jpeg",
        ]}
      />
      <QuoteComponent
        para="Our institution works to give every student quality learning and a supportive space to grow. We focus on strong values, clear teaching, and building skills step by step. Parents and students can reach out anytime for help or information."
        quote="Together, we work towards creating a bright and confident future for every learner."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/sant-Gadge-baba-madhyamik/img_student.png"
      />
    </div>
  );
};

export default SantGadgeBabamadhyamik;
