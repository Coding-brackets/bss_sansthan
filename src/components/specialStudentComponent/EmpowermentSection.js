import Image from "next/image";
import React from "react";

const EmpowermentSection = () => {
    return (
        <section className="empowerment-section mb-100">
            <div className="container">
                <div className="row">
                    {/* Left Content */}
                    <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column justify-content-center">
                        <h2 className="section_heading  mb-3">
                            Because Every Student Deserves the Opportunity to Shine
                        </h2>
                        <p className="text-muted mb-3" style={{ fontSize: "16px", fontWeight: "400" }}>
                           We believe every student carries unique strengths and talents. With encouragement, guidance and the right learning environment, students achieve remarkable growth and success. Each day, we celebrate stories of dedication and accomplishment that inspire continuous improvement in education.

                        </p>
                        <p className="text-muted mb-4">
                           Together, we are shaping a future rooted in inclusivity and equality.

                        </p>

                        <hr />

                        <p className="text-center fst-italic mt-3 mb-0" style={{ fontSize: "20px", fontWeight: "500", color: "#000000" }}>
                            “Our goal is to build a strong educational ecosystem where specially abled students are empowered with knowledge and opportunities.”
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

        </section>
    );
};

export default EmpowermentSection;
