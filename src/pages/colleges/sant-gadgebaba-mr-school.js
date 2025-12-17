import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const SwayamseviJanmubaiMadhyamik = () => {
  return (
     <div>
       <HeroSection
      subHeadingCon="Welcome to"
        heading="Sant Gadgebaba MR School,Nerla"
        bgImage="/assets/heroImages/swayamsevi-janmubai-sala.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/swayamsevi-janmubai/school.png"
        heading="Come and Discover Sant Gadgebaba MR School,Nerla"
        description={[
            "Sant Gadgebaba MR School,Nerla offers simple and practical learning that helps students understand daily life and important values in a fun and meaningful way. Here, we promote clean habits and respect, inspired by the teachings of Sant Gadge Baba. Students learn through stories, hands-on activities, extra-curricular programs, and lively lessons that make every day exciting. Our teachers support each child with patience and care, helping them grow in skills, confidence, and creativity. With a warm and motivating environment, the school shapes responsible and active learners who love coming to school. Contact Us to know how students discover new talents and shine brighter every single day."
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Check out the gallery to experience the learning moments and celebrations of our students."
      images={[
    "/assets/CollegesImg/swayamsevi-janmubai/student1.jpg",
    "/assets/CollegesImg/swayamsevi-janmubai/student2.jpg",
    "/assets/CollegesImg/swayamsevi-janmubai/playground2.png",
    "/assets/CollegesImg/swayamsevi-janmubai/playground3.png",
    "/assets/CollegesImg/swayamsevi-janmubai/playground1.jpg",
    
  ]}
      />
      <QuoteComponent
        para="Our institution strives to provide quality learning and a caring space where students can grow well. We believe in strong values, clear teaching, and gradual skill development. Parents and students are welcome to reach out whenever they need assistance. "
        quote="Together, we aim to shape a bright and confident future for every learner."
        // image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/swayamsevi-janmubai/students.webp"
      />
    </div>
  )
}

export default SwayamseviJanmubaiMadhyamik
