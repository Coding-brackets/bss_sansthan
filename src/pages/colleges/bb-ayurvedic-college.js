import Announcement from '@/components/collegeComponents/announcement'
import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const BBAyurvedic = () => {
  return (
    <div>
      <HeroSection
      subHeadingCon="Welcome to"
        heading="Bhojraj Bhondekar Ayurvedic College"
        bgImage="/assets/heroImages/bb-ayurvedic-college.webp"
      />
      <Announcement/>
      <CollegeConSec
        image="/assets/CollegesImg/doctorImg.png"
        heading="Let’s Learn More About Bhojrajji Bhondekar Physiotherapy College"
        description={[
            "Late Shri Bhojrajji Bhondekar, the brainchild of Bhojrajji Bhondekar Physiotherapy College, founded this institution to bring change in society through education and community service. It is a government-recognized institute currently managed by Bhodenkar Shikshan Sanstha with the goal of providing education easily to underprivileged students. The idea of this institute is to help students access job opportunities in the field of Physiotherapy within their budget.",
            "This Physiotherapy College has 6 departments with advanced facilities and modern equipment. Students can choose their desired fields and can access the digital library, which offers online articles and video lectures by professionals."
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Being a reputed Ayurveda institute, we help our students to gain maximum knowledge by combining theory with real-life scenarios."
      images={[
    "/assets/CollegesImg/ayurvedic-clg4.webp",
    "/assets/CollegesImg/ayurvedic-clg2.webp",
    "/assets/CollegesImg/ayurvedic-clg3.webp",
    "/assets/CollegesImg/ayurvedic-clg5.webp",
    "/assets/CollegesImg/ayurvedic-clg1.webp",
    
  ]}
      />
      <QuoteComponent
        para="Our organization stands as a model of modern education blended with compassionate service and sustainability. Our organization stands as a model of modern education blended with compassionate service and sustainability."
        quote="Every facility we build reflects our mission — to nurture excellence, innovation, and holistic growth."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/collegeQuote1.png"
      />
    </div>
  )
}

export default BBAyurvedic
