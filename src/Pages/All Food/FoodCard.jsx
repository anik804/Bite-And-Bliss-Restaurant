import React from "react";

const FoodCard = ({food}) => {

  const {photo,name,description,price_bdt,category,cuisine} = food;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={photo}
          alt="Shoes"
          className="h-60 w-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{cuisine}</div>
        </h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Price : {price_bdt} BDT</div>
          <div className="badge badge-outline">Category : {category}</div>
        </div>
      </div>
      <button className="btn btn-soft btn-accent mx-5 my-5">View Details</button>
    </div>
  );
};

export default FoodCard;
