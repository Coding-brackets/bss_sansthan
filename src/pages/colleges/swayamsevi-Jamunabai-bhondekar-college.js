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
        heading="Swayamsevi Jamunabai Bhondekar College"
        bgImage="/assets/heroImages/swayamsevi-janmubai-college.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/swayamsevi-bhondekar-college/classroomFrame.png"
        heading="Let’s Explore Swayamsevi Jamunabai Bhondekar College, Umri, Navegaon Bandh"
        description={[
            "Jamunabai Bhondekar College provides a strong platform for higher education, guiding students as they work toward meaningful careers and personal growth. The college blends clear instruction and regular mentorship so students can understand their subjects with full confidence and apply their own knowledge in real situations. ",
            "Students receive support for competitive exams and overall personality shaping, helping them stand out in today’s world. We motivate students to explore new fields and connect with opportunities that match their goals. With steady guidance and a focus on real-world readiness, the college prepares young adults to move forward with clarity and purpose. ",
            "Discover how students here build strong abilities and move closer to the careers they dream of."
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Discover how our students learn and grow by browsing the pictures in our gallery.."
      images={[
    "/assets/CollegesImg/swayamsevi-bhondekar-college/classroom.jpg",
    "/assets/CollegesImg/swayamsevi-bhondekar-college/classroom1.jpg",
    "/assets/CollegesImg/swayamsevi-bhondekar-college/doctor.jpg",
    "/assets/CollegesImg/swayamsevi-bhondekar-college/event.jpg",
    "/assets/CollegesImg/swayamsevi-bhondekar-college/college.jpg",
    
  ]}
      />
      <QuoteComponent
        para="Our institution works to give every student quality learning and a supportive space to grow. We focus on strong values, clear teaching, and building skills step by step. Parents and students can reach out anytime for help or information. "
        quote="Together, we work towards creating a bright and confident future for every learner."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/swayamsevi-bhondekar-college/Rectangle 21206@2x.png"
      />
    </div>
  )
}

export default SwayamseviJanmubaiBhondekar
