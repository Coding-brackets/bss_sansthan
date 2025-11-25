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
      "/assets/gallery/gallery1.jpg",
      "/assets/gallery/gallery2.jpg",
      "/assets/gallery/gallery3.jpg",
      "/assets/gallery/gallery4.jpg",
      "/assets/gallery/gallery5.jpg",
      "/assets/gallery/gallery6.jpg",
    ],
    "Smiles & Success": [
      "/assets/gallery/gallery6.jpg",
      "/assets/gallery/gallery5.jpg",
      "/assets/gallery/gallery4.jpg",
      "/assets/gallery/gallery3.jpg",
      "/assets/gallery/gallery2.jpg",
      "/assets/gallery/gallery1.jpg",
    ],
    "Inspiring Journeys": [
      "/assets/gallery/gallery1.jpg",
      "/assets/gallery/gallery2.jpg",
      "/assets/gallery/gallery3.jpg",
      "/assets/gallery/gallery4.jpg",
      "/assets/gallery/gallery5.jpg",
      "/assets/gallery/gallery6.jpg",
    ],
    "Life at Our Campus": [
      "/assets/gallery/gallery6.jpg",
      "/assets/gallery/gallery5.jpg",
      "/assets/gallery/gallery4.jpg",
      "/assets/gallery/gallery3.jpg",
      "/assets/gallery/gallery2.jpg",
      "/assets/gallery/gallery1.jpg",
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
