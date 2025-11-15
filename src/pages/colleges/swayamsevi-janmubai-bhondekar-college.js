import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const SwayamseviJanmubaiBhondekar = () => {
  return (
   <div>
       <HeroSection
      subHeadingCon="Welcome to-"
        heading="Swayamsevi Janmubai Bhondekar College"
        bgImage="/assets/heroImages/swayamsevi-janmubai-college.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/swayamsevi-bhondekar-college"
        heading="Let’s Explore Swayamsevi Janmubai Bhondekar College, Umri, Navegaon Bandh"
        description={[
            "Late Shri Bhojrajji Bhondekar, the brainchild of Bhojrajji Bhondekar Physiotherapy College, founded this institution to bring change in society through education and community service. It is a government-recognized institute currently managed by Bhodenkar Shikshan Sanstha ",
            "This Physiotherapy College has 6 departments with advanced facilities and modern equipment. Students can choose their desired fields and can access the digital library, which offers online articles and video lectures by professionals."
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Our institute has made learning easy by merging theory with practicals. The timely activities we provide help our students to apply their knowledge in real life."
      images={[
    "/assets/CollegesImg/swayamsevi-bhondekar-college",
    "/assets/CollegesImg/swayamsevi-bhondekar-college",
    "/assets/CollegesImg/swayamsevi-bhondekar-college",
    "/assets/CollegesImg/swayamsevi-bhondekar-college",
    "/assets/CollegesImg/swayamsevi-bhondekar-college",
    
  ]}
      />
      <QuoteComponent
        para="Our organization stands as a model of modern education blended with compassionate service and sustainability. Our organization stands as a model of modern education blended with compassionate service and sustainability."
        quote="Every facility we build reflects our mission — to nurture excellence, innovation, and holistic growth."
        image1="/assets/CollegesImg/ayurved.jpg"
        image2="/assets/CollegesImg/swayamsevi-bhondekar-college"
      />
    </div>
  )
}

export default SwayamseviJanmubaiBhondekar
