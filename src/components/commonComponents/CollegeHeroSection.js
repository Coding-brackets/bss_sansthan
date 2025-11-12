import React from "react";
import { ArrowUpRight } from "lucide-react";

const CollegeHeroSection = ({ heading, description, bgImage, buttonText }) => {
    return (
        <div className="container-fluid mb-100 p-0">
            <div
                className="my-40 hero_section p-80 subHeroBanner d-flex bg-cover bg-center bg-no-repeat position-relative overflow-hidden"
                style={{
                    backgroundImage: bgImage ? `url(${bgImage})` : "none",
                    minHeight: "400px",
                }}
            >
                {/* === Overlay Blur Layer === */}
                <div className="position-absolute top-0 start-0 w-100 h-100 blur-bg "  ></div>

                {/* === Content Section === */}
                <div className="college_hero_content position-relative text-white" >
                    <h1 className="mb-4">{heading}</h1>
                    <p className="mb-0">{description}</p>

                    {/* Button Section */}
                    <a
                        href="/"
                        className="btn-hero d-inline-flex align-items-center gap-2 mt-3"
                    >
                        {buttonText} <ArrowUpRight size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CollegeHeroSection;
