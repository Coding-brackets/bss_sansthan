import React from "react";

const SubPagesHero = ({ heading, description, bgImage }) => {
  return (
    <div className="container-fluid mb-100 p-0">
      <div
        className="my-40 hero_section p-80 subHeroBanner d-flex align-items-center justify-content-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          minHeight: "400px",
        }}
      >
        <div className="sub_hero_content  m-auto text-center">
          <h1 className="mb-4">{heading}</h1>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SubPagesHero;


