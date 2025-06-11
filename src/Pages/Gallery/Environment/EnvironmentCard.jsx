import React from "react";

const EnvironmentCard = ({envi}) => {

  const {image} = envi
  return (
    <div className="card bg-base-100 w-auto h-50 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default EnvironmentCard;
