import Mission from "@/components/aboutComponent/Mission";
import CollegeHeroSection from "@/components/specialStudentComponent/CollegeHeroSection";
import Testimonials from "@/components/commonComponents/Testimonials";
import EmpowermentSection from "@/components/specialStudentComponent/EmpowermentSection";
import GallerySection from "@/components/specialStudentComponent/GallerySection";
import InclusiveCollegesSection from "@/components/specialStudentComponent/InclusiveCollegesSection";
import React from "react";

const specialStudents = () => {
 const specialGalleryTabs = {
  "Moments of Inclusion": [
    { image: "/assets/gallery/gallery1.jpg", alt: "Moments of Inclusion 1" },
    { image: "/assets/gallery/gallery2.jpg", alt: "Moments of Inclusion 2" },
    { image: "/assets/gallery/gallery3.jpg", alt: "Moments of Inclusion 3" },
    { image: "/assets/gallery/gallery4.jpg", alt: "Moments of Inclusion 4" },
    { image: "/assets/gallery/gallery5.jpg", alt: "Moments of Inclusion 5" },
    { image: "/assets/gallery/gallery6.jpg", alt: "Moments of Inclusion 6" },
  ],

  "Smiles & Success": [
    { image: "/assets/gallery/gallery6.jpg", alt: "Smiles & Success 1" },
    { image: "/assets/gallery/gallery5.jpg", alt: "Smiles & Success 2" },
    { image: "/assets/gallery/gallery4.jpg", alt: "Smiles & Success 3" },
    { image: "/assets/gallery/gallery3.jpg", alt: "Smiles & Success 4" },
    { image: "/assets/gallery/gallery2.jpg", alt: "Smiles & Success 5" },
    { image: "/assets/gallery/gallery1.jpg", alt: "Smiles & Success 6" },
  ],

  "Inspiring Journeys": [
    { image: "/assets/gallery/gallery1.jpg", alt: "Inspiring Journeys 1" },
    { image: "/assets/gallery/gallery2.jpg", alt: "Inspiring Journeys 2" },
    { image: "/assets/gallery/gallery3.jpg", alt: "Inspiring Journeys 3" },
    { image: "/assets/gallery/gallery4.jpg", alt: "Inspiring Journeys 4" },
    { image: "/assets/gallery/gallery5.jpg", alt: "Inspiring Journeys 5" },
    { image: "/assets/gallery/gallery6.jpg", alt: "Inspiring Journeys 6" },
  ],

  "Life at Our Campus": [
    { image: "/assets/gallery/gallery6.jpg", alt: "Life at Our Campus 1" },
    { image: "/assets/gallery/gallery5.jpg", alt: "Life at Our Campus 2" },
    { image: "/assets/gallery/gallery4.jpg", alt: "Life at Our Campus 3" },
    { image: "/assets/gallery/gallery3.jpg", alt: "Life at Our Campus 4" },
    { image: "/assets/gallery/gallery2.jpg", alt: "Life at Our Campus 5" },
    { image: "/assets/gallery/gallery1.jpg", alt: "Life at Our Campus 6" },
  ],
};


  return (
    <div>
      <CollegeHeroSection
        heading="Empowering Every Ability, Enabling Every Dream"
        description="We believe that education should have no barriers. Our mission is to ensure that every student — regardless of physical or cognitive challenges — has the support, accessibility, and opportunities they deserve to learn, grow, and succeed."
        bgImage="/assets/heroImages/special-student-bg.webp"
        buttonText="Learn How We Help"
        heroButton="true"
        desc="true"
      />

      <Mission
        image="/assets/student-about-us.png"
        subHeadingCon="ABOUT US"
        heading="Creating Equal Opportunities Through Education"
        description={[
          "At our institution, inclusivity is more than a value — it’s our foundation. We are committed to supporting students with disabilities by providing accessible learning environments, adaptive resources, and personalized guidance.",
          "From wheelchair-accessible classrooms and assistive technologies to dedicated counseling and mentorship programs, we ensure that every learner has the tools and encouragement they need to thrive academically and personally.",
          "Our faculty and staff are trained to recognize diverse needs, foster understanding, and promote an atmosphere where all students feel respected, supported, and empowered.",
        ]}
        SubHeading="true"
      />

      {/* <StudentAboutUs /> */}

      <GallerySection
        title="Gallery of Inclusion"
        description="Explore heartwarming moments of empowerment and success."
        tabsData={specialGalleryTabs}
        differClass="my-40 p-80"
      />

      <EmpowermentSection />
      <InclusiveCollegesSection />
      <Testimonials />
    </div>
  );
};

export default specialStudents;
