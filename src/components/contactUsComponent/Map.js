"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
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

// ✅ Fix Leaflet marker icon issue in React
import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Map = () => {
  const position = [21.1682, 79.6575];

  return (
    <div className="mb-80">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-8">
            <div className="map-banner overflow-hidden shadow-sm">
              <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: "400px", width: "100%", borderRadius: "20px" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position}>
                  <Popup>
                    📍 <strong>Shankar Nagar</strong> <br />
                    Bhandara, Maharashtra 441904
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info-card d-flex flex-column justify-content-between position-relative overflow-hidden">
              <div className="mb-5">
                <h5 className="fw-bold">Contact Information</h5>
                <p className="small mb-4">
                  Say something to start a live chat!
                </p>

                <p className="mb-3 d-flex align-items-center">
                  <PhoneCall className="me-3" /> +91 97668 08377
                </p>
                <p className="mb-3 d-flex align-items-center">
                  <Mail className="me-3" /> demo@gmail.com
                </p>
                <p className="mb-0 d-flex align-items-start">
                  <MapPin className="me-3 mt-1" />
                  Sahkar Nagar, Bank Colony, Kisan Chowk, Bhandara, Maharashtra
                  441904
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
              <div className="circle2"/>
              <div className="circle1"/>
            </div>

            {/* <div className="mt-3 contactUsImg ">
              <Image
                src="/assets/contactUs.png"
                alt="Support Agent"
                width={300}
                height={390}
                className=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
