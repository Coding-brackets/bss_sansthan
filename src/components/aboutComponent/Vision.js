import React from 'react'

const Vision = ({
     image,
  heading,
  description,
  reverse = true,
}) => {
  return (
    <div className="position-relative mb-100 sec_wid sec_right">
      <div className="container-fluid ">
        <div
          className={`row legacy_content_sec align-items-center g-4 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Left / Right image */}
          <div className="col-md-6 legacy_left pe-0 text-end">
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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Vision
