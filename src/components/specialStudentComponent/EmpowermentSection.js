import Image from "next/image";
import React from "react";

const EmpowermentSection = () => {
    return (
        <section className="empowerment-section mb-100">
            <div className="container">
                <div className="row align-items-center flex-column flex-md-row">
                    {/* Left Content */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="fw-bold mb-3" style={{ fontSize: "34px" }}>
                            Because Every Student <br /> Deserves a Chance to Shine
                        </h2>
                        <p className="text-muted mb-3" style={{ fontSize: "16px", fontWeight: "400" }}>
                            We believe that a disability does not define a person’s potential —
                            determination does. Each day, we witness incredible stories of
                            courage, resilience, and achievement among our students. Their
                            journey inspires us to do more, build better, and keep breaking
                            barriers.
                        </p>
                        <p className="text-muted mb-4">
                            Together, we are not just educating minds — we’re shaping a future
                            where inclusivity, compassion, and equality are the cornerstones of
                            progress.
                        </p>

                        <hr />

                        <p className="text-center fst-italic mt-3 mb-0" style={{ fontSize: "20px", fontWeight: "500", color: "#000000" }}>
                            “Accessibility is not a privilege; it’s a right. Empowering every
                            learner means empowering our future.”
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="col-md-6 text-center">
                        <div className="position-relative d-inline-block">
                            <Image
                                src="/assets/mla-bhandara.jpg"
                                alt="Mr. Narendra B. Bhondekar"
                                width={530}
                                height={540}
                                className="img-fluid empowerment-image"
                                style={{ borderRadius: "150px 60px 60px 60px" }}
                            />
                            <div className="empowerment-caption shadow-sm">
                                Mr. Narendra B. Bhondekar (MLA Bhandara)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .empowerment-section h2 {
          font-size: 38px;
          font-family: "Anybody", sans-serif;
          font-weight: 700;
          line-height: 1.3;
          color: #000;
        }

        .empowerment-section p {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
        }

        .empowerment-image {
          border-radius: 40px;
          object-fit: cover;
          width: 100%;
          height: auto;
        }

        .empowerment-caption {
          position: absolute;
          bottom: 16px;
          left: 12%;
          transform: translateX(-7%);
          background: #fff;
          border-radius: 20px;
          padding: 20px 10px;
          font-weight: 500;
          font-size: 20px;
          color: #000;
        }

        hr {
          border-top: 1px solid #0000004D;
          color:#0000004D;
        }

        @media (max-width: 768px) {
          .empowerment-section h2 {
            font-size: 30px;
          }
          .empowerment-caption {
            font-size: 13px;
            padding: 6px 12px;
          }
        }
      `}</style>
        </section>
    );
};

export default EmpowermentSection;
