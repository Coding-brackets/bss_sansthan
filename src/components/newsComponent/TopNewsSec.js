import Image from "next/image";
import React from "react";

const TopNewsSec = ({ mainNews }) => {
  if (!mainNews) return null;
  return (
    <>
      <div className="card mb-4 mainNews_card p-0 overflow-hidden">
        <Image
          src={mainNews.image || mainNews.newsImg || "/assets/news/default.jpg"}
          alt={mainNews.title || "Top News"}
          width={1000}
          height={500}
          className="w-100 object-cover"
        />
        <div className="card-body mainNews_body">
          <p className="">{mainNews.date} | {mainNews.editor}</p>
          <h4 className=" mb-2">
            {mainNews.title}:{" "}
            {mainNews.description && (
              <span >
                {mainNews.description}
              </span>
            )}
          </h4>
        </div>
      </div>
    </>
  );
};

export default TopNewsSec;
