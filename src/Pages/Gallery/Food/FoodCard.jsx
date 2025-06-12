import React from 'react';

const FoodCard = ({ foods, onClick }) => {

  const { image } = foods;

  return (
    <div className="card bg-base-100 w-auto h-50 shadow-sm cursor-pointer" onClick={onClick}>
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
