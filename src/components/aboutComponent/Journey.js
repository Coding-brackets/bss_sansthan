import React from 'react'



const timelineData = [
  {
    year: "2002",
    title: "Hon. Late Shri. Bhojrajji L. Bhondekar",
    subtitle: "Founder of BSS, Bhandara",
    description:
      "Established 3 residential schools for differently-abled (mentally challenged) children.",
  },
  {
    year: "2008",
    title: "Hon. Smt. Manjula B. Bhondekar",
    subtitle: "Chairperson of BSS, Bhandara",
    description:
      "Laid foundation of D.S.E.M.R. teacher training institute & Manjulabai Bhondekar College (focused on MPSC/UPSC preparation).",
  },
  {
    year: "2014",
    title: "Hon. Shri. Narendraji B. BSS",
    subtitle: "MLA, Bhandara",
    description: "Established PES Hospital and Research Centre.",
  },
  {
    year: "2015",
    title: "Dr. Ashvini Narendra Bhondekar",
    subtitle: "M.B.B.S, D.G.O SBS Sanstha, Bhandara",
    description:
      "Setup district's first B.Sc. Nursing college as a part of BSS project.",
  },
  {
    year: "2018",
    title: "BSS Expands Education Initiatives",
    subtitle: "Regional Development",
    description:
      "Opened new educational branches focusing on technology and innovation.",
  },
  {
    year: "2022",
    title: "Digital Transformation Launch",
    subtitle: "Smart Campus Initiative",
    description:
      "Introduced AI-based education and digital classrooms across BSS institutions.",
  },
  {
    year: "2025",
    title: "Future Vision 2030",
    subtitle: "Global Collaboration",
    description:
      "Plans to collaborate with international universities for research and student exchange programs.",
  },
];

const Journey = () => {
  return (
     <section className="journey-section mb-100 my-40">
      <div className="container-fluid journey_banner">
      <h2 className="section_heading  journey_heading mb-0">Our Journey</h2>
      <div className='position-relative w-100 ' style={{ padding:'0px 70px' }}>
      <div className="timeline-road" >
        <hr/>
            <div className='dashed-line'/>
            <hr/>
        </div>
      <div className='position-relative w-100 journey_scroll'>
        {/* Timeline Road */}
        

        {/* Dynamic Timeline */}
        <div className="timeline d-flex justify-content-between position-relative">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "top" : "bottom"
              }`}
            >
              <div className="marker">
                <div class="marker-inner"></div>
              </div>
              <div className="journey_content d-flex">
                <div className="year">{item.year}</div>
                <div className='journey_desc' style={{ padding: '0px 10px' }}>
                <h4>{item.title}</h4>
                <h6 className="fw-semibold">{item.subtitle}</h6>
                <p>{item.description}</p>
                </div>
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

export default Journey
