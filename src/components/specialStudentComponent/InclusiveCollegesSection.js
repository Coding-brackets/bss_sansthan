import React from "react";

const InclusiveCollegesSection = () => {
    const colleges = [
        {
            title: "Sunrise Inclusive College of Education",
            description:
                "Together, we are building an inclusive educational ecosystem that celebrates diversity, empowers students with special needs, and helps them achieve their academic and personal goals.",
        },
        {
            title: "Shakti Medical & Rehabilitation College",
            description:
                "Focused on health sciences and rehabilitation, Shakti College combines medical education with practical training for students with physical disabilities, promoting independence and professional excellence.",
        },
        {
            title: "Unity Art’s & Commerce College",
            description:
                "A campus that champions inclusion through flexible learning programs, counseling support, and community engagement for students with special learning needs.",
        },
        {
            title: "Harmony Institute of Technology & Science",
            description:
                "Known for its accessible campus design and inclusive teaching practices, Harmony Institute ensures that differently-abled students can pursue careers in engineering, IT, and applied sciences without barriers.",
        },
    ];

    return (
        <section className="container-fluid mb-100 p-0">
            <div className="inclusive-colleges my-40 p-80 ">
                <div className="row g-4 align-items-start flex-column flex-md-row">
                    {/* Left Content */}
                    <div className="col-md-6 m-auto">
                        <div className="left-box p-4 ">
                            <h2 className="fw-bold mb-3">
                                Inclusive Institutes &
                                Colleges Supporting 
                                Special Students
                            </h2>
                            <p className="text-dark mb-3">
                                Our network of institutions is dedicated to making education accessible for
                                everyone. These colleges and training centers are equipped with modern
                                infrastructure, assistive technology, and specialized support teams to ensure
                                that students with disabilities receive the same opportunities, respect, and
                                encouragement as every other learner.
                            </p>
                            <p className="text-dark">
                                Together, we are building an inclusive educational ecosystem that celebrates
                                diversity, empowers students with special needs, and helps them achieve their
                                academic and personal goals.
                            </p>
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div className="col-md-6">
                        <div className="row g-3">
                            {colleges.map((college, index) => (
                                <div className="col-sm-6" key={index}>
                                    <div className={`college-card card-${index + 1} bg-white p-4 h-100 shadow-sm`}>
                                        <h5 className="fw-bold mb-2">{college.title}</h5>
                                        <p className="text-muted mb-0">{college.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default InclusiveCollegesSection;
