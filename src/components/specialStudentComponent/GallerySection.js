"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import GalleryPopup from "../commonComponents/GalleryPopup";

const GallerySection = ({ title, description, tabsData, differClass }) => {
  const tabs = Object.keys(tabsData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const currentImages = tabsData[activeTab];

  return (
    <>
      <div className="container-fluid mb-80 p-0">
        <div
          className={`gallery-section d-flex bg-cover bg-center bg-no-repeat position-relative overflow-hidden ${differClass}`}
        >
          <div className="text-center">
            <h2 className="fw-bold mb-2">{title}</h2>
            <p className="text-muted mb-4">{description}</p>

            {/* Tabs */}
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedImageIndex(null);
                  }}
                  className="btn px-4 py-2 fw-medium transition-all duration-200"
                  style={{
                    fontFamily: "Geist",
                    fontSize: "16px",
                    fontWeight: "500",
                    border: "none",
                    backgroundColor: activeTab === tab ? "#0A2656" : "#F5EFEC",
                    color: activeTab === tab ? "#fff" : "#333",
                    borderRadius: "10px",
                    boxShadow:
                      activeTab === tab
                        ? "0 2px 8px rgba(0,0,0,0.2)"
                        : "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="row g-4">
              {currentImages.map((src, index) => (
                <div className="col-6 col-md-4" key={index}>
                  <div
                    className="overflow-hidden  relative  gallery-container"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Image
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      width={1000}
                      height={100}
                      className="gallery-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        {/* Popup Modal */}
      {selectedIndex !== null && (
        <GalleryPopup
          images={currentImages}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
};

export default GallerySection;



