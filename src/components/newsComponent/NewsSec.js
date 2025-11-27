import React, { useState, useEffect } from "react";
import TopNewsSec from "./TopNewsSec";
import NewsGrid from "./NewsGrid";

const NewsSec = () => {
  const [newsData, setNewsData] = useState([]);
  const [mainNews, setMainNews] = useState(null);

  useEffect(() => {
    // 🔁 Later, replace this with your real backend endpoint
    fetch("https://bss.alekh.online/api/fetch-news-events-data")
      .then(res => res.json())
      .then(data => {
        setNewsData(data);
        setMainNews(data[0]); // first one as default
      })
      .catch(err => console.error("Error loading news:", err));
  }, []);

  if (!mainNews) return <p className="text-center my-5">Loading news...</p>;

  return (
    <div className="mb-100">
      <div className="container">
        <div className="row">
          <TopNewsSec mainNews={mainNews} />
        </div>

        <NewsGrid newsData={newsData} onSelectNews={setMainNews} />
      </div>
    </div>
  );
};

export default NewsSec;
