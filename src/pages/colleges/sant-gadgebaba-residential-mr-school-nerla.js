import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const SantGadgeBabamadhyamik = () => {
  return (
    <div>
       <HeroSection
      subHeadingCon="Welcome to"
        heading="Sant Gadgebaba Residential MR School, Nerla"
        bgImage="/assets/heroImages/sant-gadge-baba-madhyamik-shala.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/sant-Gadge-baba-madhyamik/school.png"
        heading="Come and Discover Sant Gadge Baba School"
        description={[
            "Sant Gadge Baba School offers simple and practical learning that helps students understand daily life and important values in a fun and meaningful way. Here, we promote clean habits and respect, inspired by the teachings of Sant Gadge Baba. Students learn through stories, hands-on activities, extra-curricular programs, and lively lessons that make every day exciting. Our teachers support each child with patience and care, helping them grow in skills, confidence, and creativity. With a warm and motivating environment, the school shapes responsible and active learners who love coming to school. Contact Us to know how students discover new talents and shine brighter every single day."
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Check out the gallery to experience the learning moments and celebrations of our students."
      images={[
    "/assets/CollegesImg/sant-Gadge-baba-madhyamik/school-image1.jpg",
    "/assets/CollegesImg/sant-Gadge-baba-madhyamik/school-image2.jpg",
    "/assets/CollegesImg/sant-Gadge-baba-madhyamik/school-image3image2.jpg",
    "/assets/CollegesImg/sant-Gadge-baba-madhyamik/school-image4.jpg",
    "/assets/CollegesImg/sant-Gadge-baba-madhyamik/school-image5.jpg",
    
  ]}
      />
      <QuoteComponent
        para="Our institution strives to provide quality learning and a caring space where students can grow well. We believe in strong values, clear teaching, and gradual skill development. Parents and students are welcome to reach out whenever they need assistance."
        quote="Together, we aim to shape a bright and confident future for every learner."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/sant-Gadge-baba-madhyamik/Rectangle 21206.png"
      />
    </div>
  )
}

export default SantGadgeBabamadhyamik
