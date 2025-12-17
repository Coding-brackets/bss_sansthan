import CollegeGallery from '@/components/collegeComponents/CollegeGallery';
import CollegeConSec from '@/components/collegeComponents/collegesConSec';
import HeroSection from '@/components/collegeComponents/HeroSection';
import QuoteComponent from '@/components/collegeComponents/quoteComponent';
import React from 'react'

const BbPhysiotherapy = () => {
  return (
    <div>
       <HeroSection
      subHeadingCon="Welcome to"
        heading="Bhojrajji Bhondekar Physiotherapy Mahavidyalaya"
        bgImage="/assets/heroImages/bb-physiotherapy-college.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/physioImg.png"
        heading="Let’s Learn More About Bhojrajji Bhondekar Physiotherapy Mahavidyalaya"
        description={[
            "Late Shri Bhojrajji Bhondekar, the brainchild of Bhojrajji Bhondekar Physiotherapy Mahavidyalaya, founded this institution to bring change in society through education and community service. It is a government-recognized institute currently managed by Bhodenkar Shikshan Sanstha with the goal of providing education easily to underprivileged students. The idea of this institute is to help students access job opportunities in the field of Physiotherapy within their budget. ",
            "This Physiotherapy College has 6 departments with advanced facilities and modern equipment. Students can choose their desired fields and can access the digital library, which offers online articles and video lectures by professionals."
        ]}
        buttonText="Visit Now"
        url="https://www.bbphysiotherapycollege.in/"
      />
      <CollegeGallery
      para="Our Gallery"
      images={[
    "/assets/CollegesImg/physio-img1.webp", 
    "/assets/CollegesImg/physio-img2.webp",
    "/assets/CollegesImg/physio-img4.webp",
    "/assets/CollegesImg/physio-img5.webp",
    "/assets/CollegesImg/physio-img3.webp",
    
  ]}
      />
      <QuoteComponent
        para="Structured learning and a supportive academic space to help every student grow with clarity and purpose. Consistent skill development ensures steady progress throughout each stage of study. Students and parents may easily reach the institution for academic guidance, administrative assistance, or course-related support."
        quote="The overall objective is to build a confident and forward-looking learner prepared to excel in higher education and future career opportunities."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/senior-indian-asian-healthy-sportsman-playing-individual-sport-gymming.png"
      />
    </div>
  )
}

export default BbPhysiotherapy;
