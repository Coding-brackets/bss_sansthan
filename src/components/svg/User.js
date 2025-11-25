import React from "react";

const User = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" fill="url(#pattern0_1342_2657)" />
      <defs>
        <pattern
          id="pattern0_1342_2657"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_1342_2657" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_1342_2657"
          width="100"
          height="100"
          preserveAspectRatio="none"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default User;
