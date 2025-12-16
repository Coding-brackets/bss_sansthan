import React from 'react'

const GallerySkelton = () => {
  return (
    <div className="container-fluid mb-80 p-0">
      <div className="gallery-section text-center">
        {/* Title skeleton */}
        <div className="skeleton skeleton-title mb-3"></div>
        <div className="skeleton skeleton-text mb-5"></div>

        {/* Tabs skeleton */}
        <div className="d-flex justify-content-center gap-2 mb-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton skeleton-tab"></div>
          ))}
        </div>

        {/* Image grid skeleton */}
        <div className="row g-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="col-6 col-md-4" key={index}>
              <div className="skeleton skeleton-image"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default GallerySkelton
