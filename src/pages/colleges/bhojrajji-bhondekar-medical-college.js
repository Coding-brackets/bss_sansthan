import CollegeGallery from "@/components/collegeComponents/CollegeGallery";
import CollegeConSec from "@/components/collegeComponents/collegesConSec";
import HeroSection from "@/components/collegeComponents/HeroSection";
import QuoteComponent from "@/components/collegeComponents/quoteComponent";
import React from "react";

const BbMedicalCollege = () => {
  // 🔁 Toggle this flag anytime
  const isProposed = true;

  const collegeName = "Bhojrajji Bhondekar Medical College";

  const CollegeTitle = () => (
    <>
      {collegeName}
      {isProposed && (
        <sup
          className="proposed-badge small"
          style={{
            marginLeft: "10px",
            padding: "2px 8px !important",
            fontSize: "0.65rem",
            fontWeight: 600,
            color: "#fff",
            background: "linear-gradient(135deg, #f73a00, #f73a00)",
            borderRadius: "20px",
            verticalAlign: "middle",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            animation: "pulse 1.6s infinite",
          }}
        >
          Proposed
        </sup>
      )}
    </>
  );

  return (
    <div>
      {/* 🔹 INLINE CSS */}
      <style jsx>{`
        .proposed-badge {
          margin-left: 10px;
          padding: 10px 8px;
         font-size: 0.65rem !important;
          font-weight: 600;
          color: #000;
          background: linear-gradient(135deg, #c1121f, #e63946);
          border-radius: 20px;
          vertical-align: middle;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          animation: pulse 1.6s infinite;
        }

        .proposed-badge.small {
          font-size: 0.65rem !important;
          // padding: 3px 10px;
          margin-left: 8px;
          color:#fff;
        }

        .college-heading {
          margin-left: 6px;
          display: inline-flex;
          align-items: center;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
        }

        @media (max-width: 768px) {
          .proposed-badge {
            font-size: 0.65rem;
            padding: 3px 8px;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <HeroSection
        subHeadingCon="Welcome to"
        heading={<CollegeTitle />}
        bgImage="/assets/heroImages/bb-medical-college-hero.webp"
      />

      {/* CONTENT SECTION */}
      <CollegeConSec
        image="/assets/CollegesImg/medicalCollege/medical-college-doctor-Image.png"
        heading={
          <>
            A Legacy of Excellence:
            <span className="college-heading">
              {collegeName}
              {isProposed && <sup className="proposed-badge small">Proposed</sup>}
            </span>
          </>
        }
        description={[
          `${collegeName}, located in Maharashtra, provides an expert learning environment to students who want to pursue medical sciences. The structured curriculum combined with advanced medical technology ensures quality education.`,
          `Currently, ${collegeName} is guided by experienced professionals. Students can access admission and fee details through our online portal.`,
        ]}
        buttonText="Visit Now"
        url="/"
      />

      {/* GALLERY */}
      <CollegeGallery
        para={`A glimpse into our campus life and learning journey. Discover the essence of ${collegeName} through our gallery.`}
        images={[
          "/assets/CollegesImg/medicalCollege/doctor-performing-surgery.png",
          "/assets/CollegesImg/medicalCollege/doctor-vacinating-patient.png",
          "/assets/CollegesImg/medicalCollege/female-doctor-examining-patient.png",
          "/assets/CollegesImg/medicalCollege/indian-hospital.jpg",
          "/assets/CollegesImg/medicalCollege/mediacl-college-student.png",
        ]}
      />

      {/* QUOTE */}
      <QuoteComponent
        para={`${collegeName} continues to lead with a commitment to evidence-based education, modern healthcare practices, and impactful community service.`}
        quote="Every advancement we make strengthens our promise to shape skilled medical professionals with a healing mindset."
        image2="/assets/CollegesImg/medicalCollege/young-doctor-img.png"
      />
    </div>
  );
};

export default BbMedicalCollege;
