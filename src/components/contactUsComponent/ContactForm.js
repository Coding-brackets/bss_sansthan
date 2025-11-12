"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        alert("Something went wrong: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error, please try again later.");
    }
  };

  return (
    <div className="contact-section mb-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Info Card */}
          <div className="col-lg-6 position-relative">
            <div className="contact-info-card">
              <div className="mb-5">
                <h5 className="fw-bold">Contact Information</h5>
                <p className="small mb-4">Say something to start a live chat!</p>

                <p className="mb-3 d-flex align-items-center">
                  <PhoneCall className="me-3" /> +91 97668 08377
                </p>
                <p className="mb-3 d-flex align-items-center">
                  <Mail className="me-3" /> demo@gmail.com
                </p>
                <p className="mb-0 d-flex align-items-start">
                  <MapPin className="me-3 mt-1" />
                  Sahkar Nagar, Bank Colony, Kisan Chowk, Bhandara, Maharashtra 441904
                </p>
              </div>

              <div className="mt-4 d-flex gap-3">
              <Link href="" className="contact_icon"><Twitter size={18} /></Link>
              <Link href="" className="contact_icon"><Instagram size={18} /></Link>
              <Link href="" className="contact_icon"><Facebook size={18} /></Link>
              
                
              </div>
            </div>

            <div className="mt-3 contactUsImg ">
              <Image
                src="/assets/contactUs.png"
                alt="Support Agent"
                width={300}
                height={390}
                className=""
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div className="p-5 rounded-4 shadow-sm bg-white form-wrapper">
              <h4 className=" mb-2 text-center">Have Questions?</h4>
              <p className="text-muted small mb-5">
                Fill the contact form and write us a message!
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <label className="form-label small">First Name</label>
                    <input
                      type="text"
                      className="form-control contactForm-input"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small">Last Name</label>
                    <input
                      type="text"
                      className="form-control  contactForm-input"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-md-6">
                    <label className="form-label small">Email</label>
                    <input
                      type="email"
                      className="form-control contactForm-input"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control contactForm-input"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 012 3456 789"
                    />
                  </div>
                </div>

                {/* Select Subject */}
                <div className="mb-5">
                  <label className="form-label small">Select Subject?</label>
                  <div className="d-flex flex-wrap gap-3 mt-1">
                    {[
                      "General Inquiry",
                      "Support",
                      "Partnership",
                      "Feedback",
                      "Other",
                    ].map((option) => (
                      <div key={option} className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="subject"
                          id={option}
                          value={option}
                          checked={formData.subject === option}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label small"
                          htmlFor={option}
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
               
                <div className="mb-5">
                  <label className="form-label small">Message</label>
                  <textarea
                    className="form-control contactForm-input"
                    name="message"
                    rows="3"
                    placeholder="Write your message.."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <a href=""
                  type="submit"
                  className=" contactForm_btn"
                >
                  Send Message
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
