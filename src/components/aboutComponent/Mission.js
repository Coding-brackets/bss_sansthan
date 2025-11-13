import React from "react";

const Mission = ({
  image,
  heading,
  description,
  subHeadingCon,
  reverse = false,
  showQuote = false, // 👈 new prop (default = true)
  SubHeading = false,
}) => {
  return (
    <div className="position-relative mb-100">
      <div className="container">
        <div
          className={`row legacy_content_sec align-items-center g-4 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Left / Right image */}
          <div className="col-md-6 legacy_left ps-0">
            <img src={image} alt={heading} className="w-100 rounded-3" />
          </div>

          {/* Content */}
          <div className="col-md-6 legacy_right d-flex align-items-center">
            <div>
              {SubHeading && (
                <p
                  className="fw-5"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#333",
                    marginBottom: "6px",
                  }}
                >
                  {subHeadingCon}
                </p>
              )}
              <h2 className="section_heading mb-3">{heading}</h2>

              {Array.isArray(description) ? (
                description.map((para, index) => (
                  <p key={index} className="section_para ">
                    {para}
                  </p>
                ))
              ) : (
                <p className="section_para mb-4">{description}</p>
              )}

              {/* 👇 Conditionally show quote */}
              {showQuote && (
                <div className="quote">
                  <p>
                    <span>“</span>Dream big, but keep your feet on the ground.
                    Whatever goal you take in hand must be achieved, no matter
                    how hard the path may be!<span>”</span>
                  </p>
                  <h5>Late Shri Bhojrajji Bhondekar</h5>
                  <p className="designation">Our Revered Founder</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
