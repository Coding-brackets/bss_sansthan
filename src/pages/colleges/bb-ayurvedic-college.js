import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import React from 'react'

const BBAyurvedic = () => {
  return (
    <div>
      <HeroSection
      subHeadingCon="Welcome to"
        heading="Bhojraj Bhondekar Ayurvedic College"
        bgImage="/assets/heroImages/bb-ayurvedic-college.png"
      />
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
      />
    </div>
  )
}

export default BBAyurvedic
