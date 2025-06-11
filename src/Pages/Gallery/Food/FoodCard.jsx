import React from 'react';

const FoodCard = ({foods}) => {

  const {image} = foods;

  return (
    <div className="card bg-base-100 w-auto h-50 shadow-sm">
      <figure>
        <img
          src={image}
          alt="foods"
        />
      </figure>
    </div>
  );
};

export default FoodCard;