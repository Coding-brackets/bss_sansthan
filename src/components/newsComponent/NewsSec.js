import React, { useState, useEffect } from "react";
import TopNewsSec from "./TopNewsSec";
import NewsGrid from "./NewsGrid";

const NewsSec = () => {
  const [newsData, setNewsData] = useState([]);
  const [mainNews, setMainNews] = useState(null);

  useEffect(() => {
    // 🔁 Later, replace this with your real backend endpoint
    // fetch("/data/news.json")
    //   .then(res => res.json())
    //   .then(data => {
    //     setNewsData(data);
    //     setMainNews(data[0]); // first one as default
    //   })

      // backend logic
        fetch("https://bss.alekh.online/api/fetch-news-events-data")
    .then(res => res.json())
    .then(response => {
      const mapped = response.data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description || "",  // backend has no description → fallback
        date: item.event_date,
        editor: "Edited by Puniti Pandey", // backend doesn't have editor → static / optional
        image: "https://bss.alekh.online/public/" + item.attachment, // FIX IMAGE PATH
        category: item.type,
        slug: item.slug,
      }));

      setNewsData(mapped);
      setMainNews(mapped[0]);
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
