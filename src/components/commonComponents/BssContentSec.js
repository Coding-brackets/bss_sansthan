
import { FaCheck } from "react-icons/fa";
import Button from "../uiComponent/Button";
// import PropTypes from "prop-types";

const BssContentSec = ({image,
  heading,
  description,
  points = [],
  buttonText = "Learn More",
  reverse = false,
}) => {
  return (
    <div className="container-fluid mb-100">
      <div
        className={`row legacy_content_sec align-items-center g-4 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        {/* Left / Right image */}
        <div className="col-md-6 legacy_left ps-0">
          <img
            src={image}
            alt={heading}
            className="w-100 legacy_img rounded-3"
          />
        </div>

        {/* Content */}
        <div className="col-md-6 legacy_right d-flex align-items-center">
          <div>
            <h2 className="section_heading mb-3">{heading}</h2>
            <p className="section_para mb-4">{description}</p>

            {points.length > 0 && (
              <ul className="list-unstyled mb-0">
                {points.map((point, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-center">
                    <FaCheck className="me-2 check_icon" />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            <Button text={buttonText} />
          </div>
        </div>
      </div>
    </div>
  )
};

// ✅ Prop validation (optional but clean)
// BssContentSec.propTypes = {
//   image: PropTypes.string.isRequired,
//   heading: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   points: PropTypes.arrayOf(PropTypes.string),
//   buttonText: PropTypes.string,
//   reverse: PropTypes.bool,
// };

export default BssContentSec;
