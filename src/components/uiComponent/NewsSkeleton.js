// NewsSkeleton.js
import React from "react";
import "../../styles/Custom.module.css";

const NewsSkeleton = () => {
  return (
    <div className="container my-5">
      <div className="row">
        
        {/* LEFT SKELETON (big news + grid) */}
        <div className="col-lg-8">
          {/* Main News Skeleton */}
          <div className="skeleton skeleton-main mb-4"></div>

          {/* Grid 2x2 Cards */}
          <div className="row g-4">
            {[1, 2, 3, 4].map((i) => (
              <div className="col-md-6" key={i}>
                <div className="skeleton skeleton-card"></div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-lg-4">
          <h5 className="mb-3 skeleton skeleton-title"></h5>

          {[1, 2, 3].map((i) => (
            <div key={i} className="d-flex mb-3">
              <div className="skeleton skeleton-thumb me-3"></div>
              <div className="flex-grow-1">
                <div className="skeleton skeleton-line mb-2"></div>
                <div className="skeleton skeleton-line small"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NewsSkeleton;
