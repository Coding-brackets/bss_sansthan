import React from 'react'

const Vision = ({
     image,
  heading,
  description,
  reverse = false,
  showQuote = false,
}) => {
  return (
    <div className="position-relative mb-80 sec_wid sec_right">
      <div className="container-fluid ">
        <div
          className={`row legacy_content_sec align-items-center g-4 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Left / Right image */}
          <div className="col-md-6 legacy_left pe-0 ">
            <img
              src={image}
              alt={heading}
              className="w-100 legacy_img rounded-3"
            />
          </div>

          {/* Content */}
          <div className="col-md-6 legacy_right d-flex align-items-center">
            <div>
              <h2 className="section_heading mb-3">{heading}</h2>
              {Array.isArray(description) ? (
                description.map((para, index) => (
                  <p key={index} className="section_para mb-4">
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


export default Vision
