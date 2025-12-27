import CollegeGallery from "@/components/collegeComponents/CollegeGallery";
import CollegeConSec from "@/components/collegeComponents/collegesConSec";
import HeroSection from "@/components/collegeComponents/HeroSection";
import QuoteComponent from "@/components/collegeComponents/quoteComponent";
import React from "react";

const UniversalBA = () => {
  return (
    <div>
      <HeroSection
        subHeadingCon="Welcome to"
        heading="Universal BA Mahavidyalaya,Nerla"
        bgImage="/assets/heroImages/universal-ba-college-hero.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/universal-ba-college/student-collage-img.png"
        heading="Let us learn about Universal BA Mahavidyalaya Nerla"
        description={[
          "The Universal BA Mahavidyalaya in Nerla, Maharashtra was founded by the late Shri Bhojrajji Bhodenkar in 2002. The aim behind the construction of this college in the remote village of Nerla was to deliver expert learning facilities for the students. The continuous praise that we receive from students, their parents and the community has encouraged us to provide exceptional educational facilities in the fields of Arts.",
          "Our Universal BA Mahavidyalaya,Nerla allows the students of Nerla to complete their graduation and post-graduation programs without any inconvenience. We have helped various students of this village to get quality education.",
        ]}
        buttonText="Visit Now"
        url="https://poojanursing.com/"
      />
      <CollegeGallery
        para="Explore Universal BA Mahavidyalaya,Nerla campus, arts programs, and student facilities. Get all the information you need with just a click."
        images={[
          "/assets/CollegesImg/universal-ba-college/ubmimg5.jpeg",
          "/assets/CollegesImg/universal-ba-college/ubmimg4.jpeg",
          "/assets/CollegesImg/universal-ba-college/ubmimg3.jpeg",
          "/assets/CollegesImg/universal-ba-college/ubmimg1.jpeg",
          "/assets/CollegesImg/universal-ba-college/ubmimg2.jpeg",
        ]}
      />
      <QuoteComponent
        para="Universal BA Mahavidyalaya,Nerla is dedicated to quality learning in the arts and a supportive environment where students thrive academically and personally. With a strong focus on values, clear instruction, and continuous skill development, the college nurtures creative, critical, and confident minds."
        quote="Students and parents are always welcome to connect for guidance and support, shaping a brighter future together."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/manjubai-college/student_image.png"
      />
    </div>
  );
};

export default UniversalBA;
