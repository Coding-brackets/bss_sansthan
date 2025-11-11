import Image from "next/image";
import React, { useEffect, useState } from "react";

const Facilities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/infrastructure.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="mb-100">
      <div className="container">
        {data.map((item, index) => {
          const isImageLeft = index % 2 === 0; // alternate layout
          return (
            <div
              key={index}
              className={`row position-relative mb-4 align-items-center flex-column flex-md-row ${
                isImageLeft ? "left-layout" : "right-layout flex-md-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="col-md-6 d-flex align-items-stretch p-0 facilities_imagSec">
                <Image
                  src={item.image}
                  alt={item.heading}
                  className={`w-100 ${
                    isImageLeft ? " img_left" : "img_right"
                  }`}
                  width={1000}
                  height={1000}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="col-md-6 d-flex align-items-center" >
                <div className={`facilities_conSec ${
                    isImageLeft ? "ms-5" : "me-5"
                  } rounded-4`}>
                  <h2 className="mb-3">{item.heading}</h2>
                  <p className="mb-3">{item.para}</p>

                  <ul className="list-unstyled">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="mb-2"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
