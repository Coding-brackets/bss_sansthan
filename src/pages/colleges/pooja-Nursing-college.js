import CarouselGallery from "@/components/collegeComponents/CarouselGallery";
import CollegeGallery from "@/components/collegeComponents/CollegeGallery";
import CollegeConSec from "@/components/collegeComponents/collegesConSec";
import HeroSection from "@/components/collegeComponents/HeroSection";
import QuoteComponent from "@/components/collegeComponents/quoteComponent";
import React from "react";

const data = [
  {
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/designers.webp",
    thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-designer.webp?w=480",
    title: "Designers",
    desc: "Tools that work like you do.",
  },
  {
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/marketers.webp",
    thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-marketer.webp?w=480",
    title: "Marketers",
    desc: "Create faster, explore new possibilities.",
  },
  {
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/filmmakers.webp",
    thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-film.webp?w=480",
    title: "VFX filmmakers",
    desc: "From concept to cut, faster.",
  },
  // add more slides...
];

const PoojaNursing = () => {
  return (
    <div>
      <HeroSection
        subHeadingCon="Welcome to-"
        heading="Pooja Nursing College & PES Hospital & Research Center, Bhandara"
        bgImage="/assets/heroImages/pooja-nursing-college-hero.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/pooja-nursing-college/college-activity-image.png"
        heading="Get To Know Our Nursing College"
        description={[
          "At Pooja Nursing College, Bhandara, we believe education is not just about learning, it’s about caring and transforming lives. Since our foundation in 2015, we have been dedicated to preparing skilled nursing professionals who are ready to serve society with excellence.",
          "With over 25+ years of combined academic and healthcare experience, our faculty work together to create a warm and innovative learning atmosphere. We blend modern teaching methods with strong practical training, ensuring our students are career-ready. Our community is inspired by a single vision, to nurture the next generation of nurses who will bring both knowledge and kindness into the world of healthcare.",
        ]}
        buttonText="Visit Now"
        url="/"
      />

      <CarouselGallery 
        images={[
          {
            img: "/assets/CollegesImg/pooja-nursing-college/college-fest-image1.jpg",
            title: "Campus",
            desc: "BCSS emerged out in Bhandara under the eminent leadership...",
          },
          {
            img: "/assets/CollegesImg/pooja-nursing-college/college-fest-image2.jpg",
            title: "Campus",
            desc: "BCSS emerged out in Bhandara under the eminent leadership...",
          },
          {
            img: "/assets/CollegesImg/pooja-nursing-college/college-fest-image3.jpg",
            title: "Campus",
            desc: "BCSS emerged out in Bhandara under the eminent leadership...",
          },
          {
            img: "/assets/CollegesImg/pooja-nursing-college/college-fest-image4.jpg",
            title: "Campus",
            desc: "BCSS emerged out in Bhandara under the eminent leadership...",
          },
          {
            img: "/assets/CollegesImg/pooja-nursing-college/college-activity-image.png",
            title: "Campus",
            desc: "BCSS emerged out in Bhandara under the eminent leadership...",
          },
        ]}
      />

      <QuoteComponent
        para="Our organization stands as a model of modern education blended with compassionate service and sustainability. Our organization stands as a model of modern education blended with compassionate service and sustainability."
        quote="Every facility we build reflects our mission — to nurture excellence, innovation, and holistic growth."
        image1="/assets/CollegesImg/ayurved.jpg"
        image2="/assets/CollegesImg/pooja-nursing-college/female-doctor-with-stethoscope-her-neck 1.png"
      />
    </div>
  );
};

export default PoojaNursing;
