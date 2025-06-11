import React from 'react';

const DrinksCard = ({drinks}) => {

  const {image} = drinks;

  return (
    <div className="card bg-base-100 w-auto h-50 shadow-sm">
      <figure>
        <img
          src={image}
          alt="environment"
        />
      </figure>
    </div>
  );
};

export default DrinksCard;