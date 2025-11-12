import Image from "next/image";
import React from "react";

const NewsGrid = ({ newsData, onSelectNews }) => {
  const sideNews = newsData.slice(0, 3);
  const upcomingEvents = newsData.slice(0, 3); // temporary, can later fetch separately

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-8">
          <div className="row g-4">
            {newsData.map((item, index) => (
              <div className="col-md-6" key={index}>
                <div
                  className="card  overflow-hidden h-100 newsCard"
                  onClick={() => onSelectNews(item)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={item.image || "/assets/news/default.jpg"}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="card-img-top w-100" 
                  />
                  <div className="card-body newsCard_conSec">
                    <p className="text-muted small mb-1">{item.date}</p>
                    <h6 className="fw-semibold">{item.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4 mt-5 mt-lg-0">
          {/* Recent News */}
          <div className="sidebar-section mb-5">
            <h5 className=" mb-3">Recent News</h5>
            {sideNews.map((item, index) => (
              <div
                key={index}
                className="d-flex mb-3 p-2 rounded-3 sidebar-card align-items-center"
                onClick={() => onSelectNews(item)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={item.image || "/assets/news/default.jpg"}
                  alt="thumb"
                  className="me-3"
                  width={70}
                  height={70}
                />
                <p className=" mb-0">{item.title}: {item.description}</p>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="sidebar-section">
            <h5 className=" mb-3">Upcoming Events</h5>
            {upcomingEvents.map((item, index) => (
              <div
                key={index}
                className="d-flex mb-3 p-2 rounded-3 sidebar-card align-items-center"
                onClick={() => onSelectNews(item)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={item.image || "/assets/news/default.jpg"}
                  alt="thumb"
                  className="me-3 rounded-3"
                  width={70}
                  height={70}
                />
                <p className="small mb-0">{item.title}: {item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
