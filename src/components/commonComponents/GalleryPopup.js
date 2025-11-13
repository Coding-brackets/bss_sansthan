
import React, { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPopup = ({ images, selectedIndex, onClose }) => {
      const [currentIndex, setCurrentIndex] = useState(selectedIndex);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);


  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content  position-relative popup-box galleryPopup_box overflow-hidden">
          <button className="close-btn z-1 bg-white" onClick={onClose}>
            <IoMdClose size={22} />
            </button>



            {/* image */}

      <div className="position-relative bg-white rounded-4 shadow-lg p-3">


        {/* Image Navigation */}
        <div className="">
          <button
            className="btn btn-light gallery_left_btn position-absolute translate-middle-y"
            style={{ top: "50%" }}
            onClick={goPrev}
          >
            <ChevronLeft size={20} />
          </button>

          <Image
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            width={425}
            height={532}
            className="rounded-4 mx-auto w-100 popup-image"
          />

          <button
            className="btn btn-light gallery_right_btn position-absolute  translate-middle-y"
            style={{ top: "50%" }}
            onClick={goNext}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Thumbnail Scroll */}
        <div
          className="d-flex justify-content-center gap-2 mt-3 overflow-auto"
        >
          {images.map((thumb, i) => (
            <Image
              key={i}
              src={thumb}
              alt={`thumb-${i}`}
              width={50}
              height={50}
              className={` border  ${
                currentIndex === i ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>








          
        </div>
      </div>


    </div>
  )
}

export default GalleryPopup

