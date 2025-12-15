import React, { useState, useEffect } from "react";
import TopNewsSec from "./TopNewsSec";
import NewsGrid from "./NewsGrid";
import NewsSkeleton from "../uiComponent/NewsSkeleton";

const NewsSec = () => {
  const [newsData, setNewsData] = useState([]);
  const [mainNews, setMainNews] = useState(null);

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};


  useEffect(() => {
    // 🔁 Later, replace this with your real backend endpoint
    // fetch("/data/news.json")
    //   .then(res => res.json())
    //   .then(data => {
    //     setNewsData(data);
    //     setMainNews(data[0]); // first one as default
    //   })

      // backend logic
        fetch("https://bss.youstable.cfd/api/fetch-news-events-data")
    .then(res => res.json())
    .then(response => {
      const mapped = response.data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description || "",  // backend has no description → fallback
        date: formatDate(item.event_date),
        editor: "Edited by Puniti Pandey", // backend doesn't have editor → static / optional
        image: "https://bss.youstable.cfd/public/storage/" + item.attachment, // FIX IMAGE PATH
        category: item.type,
        slug: item.slug,
      }));

      setNewsData(mapped);
      setMainNews(mapped[0]);
    })

      .catch(err => console.error("Error loading news:", err));
  }, []);

  if (!mainNews) return <NewsSkeleton/>;

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
