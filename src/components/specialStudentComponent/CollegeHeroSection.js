import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CollegeHeroSection = ({
  heading,
  description,
  bgImage,
  buttonText,
  subHeadingCon,
  SubHeading = false,
  heroButton = false,
  desc = false,
}) => {
  return (
    <div className="container-fluid mb-100 p-0 ">
    <div className="my-40 border_right">
      <div
        className=" hero_section p-80 subHeroBanner d-flex bg-cover bg-center bg-no-repeat position-relative overflow-hidden"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
        }}
      >

        {/* === Content Section === */}
        <div className="college_hero_content collegeContent_banner position-relative">
          {SubHeading && <p className="hero_subHeading">{subHeadingCon}</p>}
          <h1 className="mb-4 text-white">{heading}</h1>
          {desc && (
          <p className="mb-0">{description}</p>
          )}
          {/* Button Section */}
          {heroButton && (
            <Link
              href="/"
              className="btn-hero d-inline-flex align-items-center gap-2 mt-5"
            >
              {buttonText} <ArrowUpRight size={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CollegeHeroSection;
