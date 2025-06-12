import React from 'react';

const SeafoodCard = ({ seafood, onClick }) => {

  const { image } = seafood;

  return (
    <div className="card bg-base-100 w-auto h-50 shadow-sm cursor-pointer" onClick={onClick}>
      <figure>
        <img
          src={image}
          alt="environment"
        />
      </figure>
    </div>
  );
};

export default SeafoodCard;
