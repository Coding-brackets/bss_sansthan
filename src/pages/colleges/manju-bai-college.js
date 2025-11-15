
import CollegeConSec from "@/components/collegeComponents/collegesConSec";
import HeroSection from "@/components/collegeComponents/HeroSection";
import QuoteComponent from "@/components/collegeComponents/quoteComponent";
import React from "react";

const ManjuBaiCollege = () => {
  return (
    <div>
      <HeroSection
        subHeadingCon="Welcome to-"
        heading="Manju bai BA/MA College, Bhawani"
        bgImage="/assets/heroImages/manju-baicollege.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/manjubai-college/college-staffs.png"
        heading="Let’s Learn More About Manjubai BA/MA College, Bhawani"
        description={[
          "Late Shri Bhojrajji Bhondekar, the brainchild of Bhojrajji Bhondekar Physiotherapy College, founded this institution to bring change in society through education and community service. It is a government-recognized institute currently managed by Bhodenkar Shikshan Sanstha with the goal of providing education easily to underprivileged students. The idea of this institute is to help students access job opportunities in the field of Physiotherapy within their budget.",
          "This Physiotherapy College has 6 departments with advanced facilities and modern equipment. Students can choose their desired fields and can access the digital library, which offers online articles and video lectures by professionals.",
        ]}
        buttonText="Visit Now"
        url="/"
      />
      

      <QuoteComponent
        para="Our organization stands as a model of modern education blended with compassionate service and sustainability. Our organization stands as a model of modern education blended with compassionate service and sustainability."
        quote="Every facility we build reflects our mission — to nurture excellence, innovation, and holistic growth."
        image1="/assets/CollegesImg/ayurved.jpg"
        image2="/assets/CollegesImg/manjubai-college/Rectangle 21206.png"
      />
    </div>
  );
};

export default ManjuBaiCollege;
