import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const HeroSection = ({
  heading,
  bgImage,
  subHeadingCon,

}) => {
  return (
    <div className="container-fluid mb-80 p-0">
      <div
        className="my-40 hero_section p-150 subHeroBanner d-flex bg-cover bg-center bg-no-repeat position-relative overflow-hidden"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
        }} >

        {/* === Content Section === */}
        <div className="college_hero_content position-relative text-white">
          <p className="hero_subHeading">{subHeadingCon}<span className="welcome-line"></span></p>
          <h1 className="mb-4 collegeHeroCon">{heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
