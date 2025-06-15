import React from "react";

const InsideCard = ({ envi, onClick }) => {
  const { image } = envi;

  return (
    <div className="card bg-base-100 w-auto h-50 shadow-sm cursor-pointer" onClick={onClick}>
      <figure>
        <img
          src={image}
          alt="inside environment"
        />
      </figure>
    </div>
  );
};

export default InsideCard;
