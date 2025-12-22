import CarouselGallery from "@/components/collegeComponents/CarouselGallery";
import CollegeConSec from "@/components/collegeComponents/collegesConSec";
import HeroSection from "@/components/collegeComponents/HeroSection";
import QuoteComponent from "@/components/collegeComponents/quoteComponent";
import React from "react";


const PoojaNursing = () => {
  return (
    <div>
      <HeroSection
        subHeadingCon="Welcome to"
        heading="Pooja Nursing College"
        bgImage="/assets/heroImages/pooja-nursing-college-hero.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/pooja-nursing-college/college-activity-image.webp"
        heading="Get To Know Our Nursing College"
        description={[
          "At Pooja Nursing College, Bhandara, we believe education is not just about learning, it’s about caring and transforming lives. Since our foundation in 2015, we have been dedicated to preparing skilled nursing professionals who are ready to serve society with excellence.",
          "With over 25+ years of combined academic and healthcare experience, our faculty work together to create a warm and innovative learning atmosphere. We blend modern teaching methods with strong practical training, ensuring our students are career-ready. Our community is inspired by a single vision, to nurture the next generation of nurses who will bring both knowledge and kindness into the world of healthcare.",
        ]}
        buttonText="Visit Now"
        url="https://www.poojanursing.com/"
      />

      <CarouselGallery 
      para="Here is a small piece of collections that were captured during college events and social programs conducted by our faculty."
        items={[
          {
            img: "/assets/CollegesImg/pooja-nursing-college/college-fest-image1.jpg",
            title: "Campus",
            desc: "Take a moment to explore Our School.",
          },
          {
            img: "/assets/CollegesImg/pooja-nursing-college/college-fest-image2.jpg",
            title: "Campus",
            desc: "Take a moment to explore Our School.",
          },
          {
            img: "/assets/CollegesImg/pooja-nursing-college/college-fest-image3.jpg",
            title: "Campus",
            desc: "Take a moment to explore Our School.",
          },
          {
            img: "/assets/CollegesImg/pooja-nursing-college/college-fest-image4.jpg",
            title: "Campus",
            desc: "Take a moment to explore Our School.",
          },
          {
            img: "/assets/CollegesImg/pooja-nursing-college/nursing-students.jpg",
            title: "Campus",
            desc: "Take a moment to explore Our School.",
          },
        ]}
      />

      <QuoteComponent
        para="We strive to create an environment where learning thrives. With the help of advanced facilities and student-centered initiatives, we continue to inspire future healthcare leaders. Our commitment goes beyond academics! We aim to shape professionals who serve humanity with integrity."
        quote="Every milestone we achieve reflects our dedication to excellence and meaningful societal impact."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/pooja-nursing-college/female-doctor-with-stethoscope-her-neck 1.png"
      />
    </div>
  );
};

export default PoojaNursing;
