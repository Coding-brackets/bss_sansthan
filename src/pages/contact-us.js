"use client";
import React from "react";
import dynamic from "next/dynamic";
import SubPagesHero from "@/components/commonComponents/SubPagesHero";
import ContactForm from "@/components/contactUsComponent/ContactForm";

// ✅ Dynamically import Map to avoid SSR "window is not defined"
const ContactMap = dynamic(() => import("@/components/contactUsComponent/Map"), {
  ssr: false,
});

const ContactUs = () => {
  return (
    <div>
      <SubPagesHero
        heading="Contact Us"
        description="An overview of our institution and its branches dedicated to education, healthcare, and service"
        bgImage="/assets/heroBackground.png"
      />
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default ContactUs;
