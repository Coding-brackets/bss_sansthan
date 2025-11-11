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
          <div className="col-lg-5">
            <div className="p-4 rounded-4 text-white contact-info-card h-100">
              <div className="mb-4">
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
                <Twitter size={18} />
                <Instagram size={18} />
                <Facebook size={18} />
                <Linkedin size={18} />
              </div>
            </div>

            <div className="mt-3 rounded-4 overflow-hidden">
              <Image
                src="/images/support-agent.jpg"
                alt="Support Agent"
                width={400}
                height={300}
                className="w-100 object-cover"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-7">
            <div className="p-5 rounded-4 shadow-sm bg-white form-wrapper">
              <h4 className="fw-bold mb-1 text-dark">Have Questions?</h4>
              <p className="text-muted small mb-4">
                Fill the contact form and write us a message!
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label small">First Name</label>
                    <input
                      type="text"
                      className="form-control border-0 border-bottom"
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
                      className="form-control border-0 border-bottom"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label small">Email</label>
                    <input
                      type="email"
                      className="form-control border-0 border-bottom"
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
                      className="form-control border-0 border-bottom"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 012 3456 789"
                    />
                  </div>
                </div>

                {/* Select Subject */}
                <div className="mb-3">
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

                {/* Message */}
                <div className="mb-4">
                  <label className="form-label small">Message</label>
                  <textarea
                    className="form-control border-0 border-bottom"
                    name="message"
                    rows="3"
                    placeholder="Write your message.."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 rounded-3 fw-semibold float-end"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
