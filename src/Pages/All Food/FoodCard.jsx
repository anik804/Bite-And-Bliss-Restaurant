import React from "react";
import { Link } from "react-router";

const FoodCard = ({food}) => {

  const {photo,name,quantity,description,category,cuisine,_id} = food;

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
          <div className="badge badge-outline">Quantity : {quantity}</div>
          <div className="badge badge-outline">Category : {category}</div>
        </div>
      </div>
      <Link to={`/menu/${_id}`}><button className="btn btn-soft btn-accent w-full">View Details</button></Link>
    </div>
  );
};

export default FoodCard;
