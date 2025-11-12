"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = ({ title, description, tabsData, differClass }) => {
    const tabs = Object.keys(tabsData);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const currentImages = tabsData[activeTab];

    // Keyboard navigation - Turbopack SAFE (no types at all)
    useEffect(() => {
        const handleKeydown = (e) => {
            if (selectedImageIndex === null) return;

            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "Escape") closeModal();
        };

        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown);
    }, [selectedImageIndex, currentImages.length]);

    const openModal = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const goNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev + 1) % currentImages.length);
        }
    };

    const goPrev = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(
                (prev) => (prev - 1 + currentImages.length) % currentImages.length
            );
        }
    };

    return (
        <>
            <div className="container-fluid mb-80 p-0">
                <div
                    className={`gallery-section d-flex bg-cover bg-center bg-no-repeat position-relative overflow-hidden ${differClass}`}
                >
                    <div className="container text-center">
                        <h2 className="fw-bold mb-2">{title}</h2>
                        <p className="text-muted mb-4">{description}</p>

                        {/* Tabs */}
                        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
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
                        <div className="row g-3">
                            {currentImages.map((src, index) => (
                                <div className="col-12 col-sm-6 col-md-4" key={index}>
                                    <div
                                        className="rounded-4 overflow-hidden shadow-sm relative group cursor-pointer"
                                        onClick={() => openModal(index)}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery ${index + 1}`}
                                            width={370}
                                            height={400}
                                            className="gallery-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                            <button className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-gray-100">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Fullscreen Modal - Like Second Website */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
                        onClick={closeModal}
                    >
                        <div className="relative max-w-5xl w-full max-h-screen flex items-center justify-center">
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition bg-black/50 hover:bg-black/70 rounded-full p-2"
                            >
                                <X size={36} />
                            </button>

                            {/* Prev Button */}
                            <button
                                onClick={goPrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full p-4 transition"
                            >
                                <ChevronLeft size={40} />
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={goNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full p-4 transition"
                            >
                                <ChevronRight size={40} />
                            </button>

                            {/* Main Image - Perfect Center + Responsive */}
                            <motion.div
                                key={selectedImageIndex}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                <Image
                                    src={currentImages[selectedImageIndex]}
                                    alt={`Full view ${selectedImageIndex + 1}`}
                                    width={1200}
                                    height={800}
                                    className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
                                    priority
                                />
                            </motion.div>

                            {/* Image Counter - Bottom */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                                {selectedImageIndex + 1} / {currentImages.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default GallerySection;