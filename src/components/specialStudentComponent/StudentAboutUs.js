import Image from "next/image";
import React from "react";

const StudentAboutUs = () => {
  // Hardcoded data directly in the component
  const data = [
    {
      heading: "",


    }
  ];

  return (
    <div className="mb-100">
      <div className="container">
        {data.map((item, index) => {
          const isImageLeft = index % 2 === 0; // Alternate layout

          return (
            <div
              key={index}
              className={`row position-relative mb-4 align-items-center flex-column flex-md-row `}
            >
              {/* Image Section */}
              <div className="col-md-5 d-flex align-items-stretch p-0 sau_imagSec">
                <Image
                  src="/assets/student-about-us.jpg"
                  alt={item.heading}
                  className={`w-100 img_left`}
                  width={1000}
                  height={1000}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="col-md-7 d-flex align-items-center">
                <div
                  className={`facilities_conSec ${isImageLeft ? "ms-5" : "me-5"
                    } rounded-4`}
                >
                  <p
                    className="fw-5"
                    style={{
                      fontSize: '18px',
                      fontWeight: '500',
                      color: '#333',marginBottom:'6px'
                    }}
                  >
                    ABOUT US
                  </p>
                  <h2 className="mb-3 mt-0">Creating Equal Opportunities Through Education</h2>
                  <p className="mb-3">
                    At our institution, inclusivity is more than a value — it’s our foundation. We are committed to supporting students with disabilities by providing accessible learning environments, adaptive resources, and personalized guidance.
                  </p>
                  <p className="mb-3">
                    From wheelchair-accessible classrooms and assistive technologies to dedicated counseling and mentorship programs, we ensure that every learner has the tools and encouragement they need to thrive academically and personally.
                  </p>
                  <p className="mb-3">
                    Our faculty and staff are trained to recognize diverse needs, foster understanding, and promote an atmosphere where all students feel respected, supported, and empowered.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentAboutUs;