"use client";
import React from "react";
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

const Map = () => {
  return (
    <div className="mb-80">
      <div className="container">
        <div className="row g-4">
          
          {/* ✅ Google Maps Iframe (Replaced Leaflet Map) */}
          <div className="col-md-8">
            <div className="map-banner overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3720.3132877241637!2d79.65163927!3d21.17971009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b3fb962971951%3A0xa648f8fc0e407ba6!2sPes%20Hospital%20And%20Research%20Centre!5e0!3m2!1sen!2sge!4v1763810516731!5m2!1sen!2sge"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE CONTACT INFO */}
          <div className="col-md-4">
            <div className="contact-info-card d-flex flex-column justify-content-between position-relative overflow-hidden">
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

              <div className="mt-4 d-flex gap-3 z-1">
                <Link href="" className="contact_icon">
                  <Twitter size={18} />
                </Link>
                <Link href="" className="contact_icon">
                  <Instagram size={18} />
                </Link>
                <Link href="" className="contact_icon">
                  <Facebook size={18} />
                </Link>
              </div>

              <div className="circle2" />
              <div className="circle1" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Map;
