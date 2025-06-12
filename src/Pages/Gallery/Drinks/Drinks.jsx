import axios from "axios";
import React, { useEffect, useState } from "react";
import DrinksCard from "./DrinksCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Drinks = () => {
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/drinks")
      .then((res) => {
        setDrink(res.data);
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

  if (loading) return <div>Loading Beverage Curator data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
  <div className="my-10">
    <h1 className='text-2xl text-center font-bold'>Our Beverage Curator</h1>
    <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5 mx-5'>
      {
        drink.map((drinks, index) => (
          <DrinksCard 
            drinks={drinks} 
            key={drinks._id} 
            onClick={() => openLightbox(index)} 
          />
        ))
      }
    </div>
    <Lightbox
      open={lightboxOpen}
      close={closeLightbox}
      slides={drink.map(item => ({ src: item.image }))}
      index={currentIndex}
    />
  </div>
  );
};

export default Drinks;
