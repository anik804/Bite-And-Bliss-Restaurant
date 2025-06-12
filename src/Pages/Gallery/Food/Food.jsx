import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Food = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/food")
      .then((res) => {
        setFood(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching data");
        setLoading(false);
      });
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (loading) return <div>Loading food data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
  <div className="my-10">
    <h1 className='text-2xl text-center font-bold'>Our Food</h1>
    <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5 mx-5'>
      {
        food.map((foods, index) => (
          <FoodCard 
            foods={foods} 
            key={foods._id} 
            onClick={() => openLightbox(index)} 
          />
        ))
      }
    </div>
    <Lightbox
      open={lightboxOpen}
      close={closeLightbox}
      slides={food.map(item => ({ src: item.image }))}
      index={currentIndex}
    />
  </div>
  );
};

export default Food;
