import React from "react";

const SubPagesHero = ({ heading, description, bgImage, subHeadingCon, SubHeading= false }) => {
  return (
    <div className="container-fluid mb-80 p-0">
    <div className="border_right my-40">
      <div
        className=" hero_section p-80 subHeroBanner d-flex align-items-center justify-content-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          minHeight: "400px",
        }}
      >
        <div className="sub_hero_content  m-auto text-center">
          <h1 className="mb-4">{heading}</h1>
           {SubHeading && (
          <h5 className="mb-4">{subHeadingCon}</h5>
           )}
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubPagesHero;


