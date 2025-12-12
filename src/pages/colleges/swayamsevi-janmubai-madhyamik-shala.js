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
        heading="Swayamsevi Janmubai Madhyamik Shala"
        bgImage="/assets/heroImages/swayamsevi-janmubai-sala.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/swayamsevi-janmubai/school.png"
        heading="Begin your journey into Janmubai Madhyamik Shala"
        description={[
            "Janmubai Madhyamik Shala delivers a strong and focused education for students from upper primary to high school, providing students with the proper guidance and structure they need to progress confidently. The school follows clear teaching methods and well-planned lessons that help students understand subjects with ease and stay prepared for academic success. Along with classroom learning, students participate in sports, cultural programs, competitions, and skill-based activities that help them discover their abilities and develop a balanced personality. With a safe environment and 100% opportunities to learn beyond textbooks, the school prepares every learner for future studies with a strong foundation. Click to explore how students advance academically toward a successful future at Janmubai Madhyamik Shala."
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Enjoy a collection of images that show how our students participate and achieve."
      images={[
    "/assets/CollegesImg/swayamsevi-janmubai/student1.jpg",
    "/assets/CollegesImg/swayamsevi-janmubai/student2.jpg",
    "/assets/CollegesImg/swayamsevi-janmubai/playground2.png",
    "/assets/CollegesImg/swayamsevi-janmubai/playground3.png",
    "/assets/CollegesImg/swayamsevi-janmubai/playground1.jpg",
    
  ]}
      />
      <QuoteComponent
        para="We are committed to giving students good learning and a safe, supportive space to move forward. Strong values, simple teaching methods, and steady skill improvement guide our work. Parents and students can contact us anytime for help or information. With this support, we look forward to building a confident future for every child."
        quote="Every facility we build reflects our mission — to nurture excellence, innovation, and holistic growth."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/swayamsevi-janmubai/Rectangle 21206.png"
      />
    </div>
  )
}

export default SwayamseviJanmubaiMadhyamik
