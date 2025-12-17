import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const SwayamseviJanmubaiBhondekar = () => {
  return (
   <div>
       <HeroSection
      subHeadingCon="Welcome to"
        heading="Late Jamunabai Bhondekar MR School Umri"
        bgImage="/assets/heroImages/swayamsevi-janmubai-college.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/swayamsevi-bhondekar-college/classroomFrame.png"
        heading="Begin your journey into Janmubai Madhyamik Shala"
        description={[
            "Janmubai Madhyamik Shala delivers a strong and focused education for students from upper primary to high school, providing students with the proper guidance and structure they need to progress confidently. The school follows clear teaching methods and well-planned lessons that help students understand subjects with ease and stay prepared for academic success. ",
            "Along with classroom learning, students participate in sports, cultural programs, competitions, and skill-based activities that help them discover their abilities and develop a balanced personality. With a safe environment and 100% opportunities to learn beyond textbooks, the school prepares every learner for future studies with a strong foundation. Click to explore how students advance academically toward a successful future at Janmubai Madhyamik Shala."
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Enjoy a collection of images that show how our students participate and achieve."
      images={[
    "/assets/CollegesImg/swayamsevi-bhondekar-college/classroom.jpg",
    "/assets/CollegesImg/swayamsevi-bhondekar-college/classroom1.jpg",
    "/assets/CollegesImg/swayamsevi-bhondekar-college/doctor.jpg",
    "/assets/CollegesImg/swayamsevi-bhondekar-college/event.jpg",
    "/assets/CollegesImg/swayamsevi-bhondekar-college/college.jpg",
    
  ]}
      />
      <QuoteComponent
        para="We are committed to giving students good learning and a safe, supportive space to move forward. Strong values, simple teaching methods, and steady skill improvement guide our work. Parents and students can contact us anytime for help or information. With this support, we look forward to building a confident future for every child."
        quote=""
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/swayamsevi-bhondekar-college/Rectangle 21206@2x.png"
      />
    </div>
  )
}

export default SwayamseviJanmubaiBhondekar
