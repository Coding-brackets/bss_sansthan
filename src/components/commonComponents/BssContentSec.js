import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import CustomButtom from "../uiComponent/CustomButtom";
import Image from "next/image";

const BssContentSec = ({
  image,
  heading,
  description,
  points = [],
  buttonText = "Learn More",
  quote,
  url,
  reverse = false,
}) => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.18, duration: 0.5 },
    }),
  };

  return (
    <div className="position-relative mb-100 sec_wid">
      <div className="container-fluid">
        <div
          className={`row legacy_content_sec align-items-center g-4 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <motion.div
            className="col-md-6 legacy_left ps-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={imageReveal}
          >
            <Image
              src={image}
              alt={heading}
              className="w-100 legacy_img rounded-3 h-100"
              width={1000}
              height={1000}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="col-md-6 legacy_right d-flex align-items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div>
              <motion.h2
                className="section_heading mb-3"
                variants={fadeUp}
              >
                {heading}
              </motion.h2>

              {Array.isArray(description) ? (
                description.map((para, index) => (
                  <motion.p
                    key={index}
                    className="section_para mb-4"
                    variants={fadeUp}
                    transition={{ delay: 0.1 * index }}
                  >
                    {para}
                  </motion.p>
                ))
              ) : (
                <motion.p
                  className="section_para mb-4"
                  variants={fadeUp}
                >
                  {description}
                </motion.p>
              )}

              {points.length > 0 && (
                <ul className="list-unstyled mb-0">
                  {points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      className="mb-2 d-flex align-items-center"
                      variants={listItem}
                      initial="hidden"
                      whileInView="show"
                      custom={idx} // used for stagger effect
                      viewport={{ once: true }}
                    >
                      <FaCheck className="me-2 check_icon" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              )}

              <motion.div variants={fadeUp} className="mt-3">
                <CustomButtom text={buttonText} url={url} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BssContentSec;
