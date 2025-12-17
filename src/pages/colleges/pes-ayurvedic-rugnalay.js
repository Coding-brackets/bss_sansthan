import Announcement from '@/components/collegeComponents/announcement'
import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const PESAyurvedicRugnalay = () => {
  return (
    <div>
      <HeroSection
      subHeadingCon="Welcome to"
        heading="PES Ayurvedic Rugnalay"
        bgImage="/assets/heroImages/bb-ayurvedic-college.webp"
      />
      <CollegeConSec
        image="/assets/CollegesImg/doctorImg.png"
        heading="A dedicated center for authentic Ayurvedic healthcare."
        description={[
            "PES Ayurvedic Rugnalay Hospital, established under the vision of Shri Bhojrajji in 2002 at Bhandara, Maharashtra, is widely recognized for delivering authentic Ayurvedic healthcare services rooted in classical medical knowledge and holistic healing practices.",
            "With a strong commitment to community welfare, the hospital focuses on providing affordable, patient centered treatment while promoting preventive healthcare, natural therapies and wellness based living for all sections of society.","By integrating traditional Ayurvedic treatments with modern medical support systems, PES Ayurvedic Rugnalay Hospital offers a healing atmosphere that prioritizes patient comfort and personalized care. "
        ]}
        buttonText="Visit Now"
        url="https://bbayurvediccollege.org/"
      />
      <CollegeGallery
      para="A glimpse into our healing spaces showcasing Ayurvedic care compassion wellness and patient centered hospital environment."
      images={[
    "/assets/CollegesImg/ayurvedic-clg4.webp",
    "/assets/CollegesImg/ayurvedic-clg2.webp",
    "/assets/CollegesImg/ayurvedic-clg3.webp",
    "/assets/CollegesImg/ayurvedic-clg5.webp",
    "/assets/CollegesImg/ayurvedic-clg1.webp",
    
  ]}
      />
      <QuoteComponent
        para="At PES Ayurvedic Rugnalay Hospital, we foster a healing environment where traditional Ayurvedic wisdom and compassionate patient care work in harmony. Through patient focused treatment approaches, natural therapies, and holistic wellness practices, we continue to support physical, mental, and spiritual well being."
        quote="Our vision goes beyond treatment, as we strive to nurture balanced living, preventive healthcare, and personalized healing guided by the principles of Ayurveda."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/collegeQuote1.png"
      />
    </div>
  )
}

export default PESAyurvedicRugnalay
