import CarouselGallery from "@/components/collegeComponents/CarouselGallery";
import CollegeConSec from "@/components/collegeComponents/collegesConSec";
import HeroSection from "@/components/collegeComponents/HeroSection";
import QuoteComponent from "@/components/collegeComponents/quoteComponent";
import React from "react";

const ManjuBaiCollege = () => {
  return (
    <div>
      <HeroSection
        subHeadingCon="Welcome to"
        heading="Manjulabai Bhondekar Mahavidyalaya"
        bgImage="/assets/heroImages/manju-baicollege.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/manjubai-college/college-staffs.png"
        heading="Find out more about Manjulabai Bhondekar Mahavidyalaya"
        description={[
          "Manjulabai Bhondekar Mahavidyalaya was established by the late Shri Bhojrajji Bhodenkar to provide graduate and postgraduate degrees in the fields of art. The foundation of this college was initiated with an idea to help students coming from marginalized communities to get a valuable education on a limited budget. Students are free to choose preferred subjects like Economics, Philosophy, Psychology, History or literature.",
          "With expert guidance from qualified teachers and a digital library, our Manjulabai Bhondekar Mahavidyalaya is helping students to attain success in their respective fields. We welcome every student who wants to grasp knowledge easily.",
        ]}
        buttonText="Visit Now"
        url="https://www.mbmbhandara.com/"
      />

      <CarouselGallery
        para="We at Manjulabai Bhondekar Mahavidyalaya believe that education should be fun hence, we encourage our students to participate in various activities."
        items={[
          {
            img: "/assets/CollegesImg/manjubai-college/manjulabai_gallery1.jpg",
            title: "Campus",
            desc: "Take a moment to explore Our School.",
          },
          {
            img: "/assets/CollegesImg/manjubai-college/classroom.jpg",
            title: "Campus",
            desc: "Take a moment to explore Our School.",
          },
          {
            img: "/assets/CollegesImg/manjubai-college/teacher-teaching-stu.jpg",
            title: "Campus",
            desc: "Take a moment to explore Our School.",
          },
          {
            img: "/assets/CollegesImg/manjubai-college/manjulabai_gallery2.jpg",
            title: "Campus",
            desc: "Take a moment to explore Our School.",
          },
          {
            img: "/assets/CollegesImg/manjubai-college/teacher.jpg",
            title: "Campus",
            desc: "Take a moment to explore Our School.",
          },
        ]}
      />

      <QuoteComponent
        para="Our institution, Manjulabai College, is committed to shaping informed and socially responsible graduates through quality education and inclusive learning. We advance education by blending academic excellence with values and student empowerment."
        quote="Every effort we make represents our mission, to nurture scholars and changemakers for a better future."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/manjubai-college/Rectangle 21206.png"
      />
    </div>
  );
};

export default ManjuBaiCollege;
