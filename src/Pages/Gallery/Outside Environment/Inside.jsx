import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import inside1 from "./1.jpg";
import inside2 from "./2.jpg";
import inside3 from "./3.jpg";
import inside4 from "./4.jpg";
import inside5 from "./5.jpg";
import inside6 from "./6.jpg";
import inside7 from "./7.jpg";
import inside8 from "./8.jpg";
import inside9 from "./9.jpg";
import inside10 from "./10.jpg";
import InsideCard from "./InsideCard";

const Inside = () => {
  const insideImages = [
    { _id: "1", image: inside1, title: "Inside View 1" },
    { _id: "2", image: inside2, title: "Inside View 2" },
    { _id: "3", image: inside3, title: "Inside View 3" },
    { _id: "4", image: inside4, title: "Inside View 4" },
    { _id: "5", image: inside5, title: "Inside View 4" },
    { _id: "6", image: inside6, title: "Inside View 4" },
    { _id: "7", image: inside7, title: "Inside View 4" },
    { _id: "8", image: inside8, title: "Inside View 4" },
    { _id: "9", image: inside9, title: "Inside View 4" },
    { _id: "10", image: inside10, title: "Inside View 4" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="my-10">
      <h1 className="text-2xl text-center font-bold">
        Our Outside Environment
      </h1>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5 mx-5">
        {insideImages.map((img, index) => (
          <InsideCard
            key={img._id}
            envi={img}
            onClick={() => openLightbox(index)}
          ></InsideCard>
        ))}
      </div>
      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        slides={insideImages.map((item) => ({ src: item.image }))}
        index={currentIndex}
      />
    </div>
  );
};

export default Inside;
