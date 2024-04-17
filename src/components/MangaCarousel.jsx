import React, { useState, useEffect } from "react";
import fetchMangaList from "../utils/mangaDexAPI";
import Slider from "react-slick";
import "./MangaCarousel.css";

const MangaCarousel = () => {
  const [mangaList, setMangaList] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mangaData = await fetchMangaList();
        setMangaList(mangaData);
      } catch (error) {
        console.error("Error fetching manga data:", error);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {mangaList.map((manga) => (
          <div key={manga.id} className="slide">
            <img
              src={manga.image_url}
              alt={`Cover of ${manga.title}`}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
            <h3 className="manga-title">{manga.title}</h3>{" "}
            {/* Title for each image */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MangaCarousel;
