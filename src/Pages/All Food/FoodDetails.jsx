import React from "react";
import { Link, useLoaderData } from "react-router";

const FoodDetails = () => {
  const { name, photo, price_bdt, quantity, category, description, cuisine,_id } =
    useLoaderData();
  // console.log(food);

  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-10">Food Details</h1>
      <div className="flex justify-center my-10">
        <div className="card bg-base-100 w-150 shadow-sm">
          <figure>
            <img
              src={photo}
              alt="food"
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
            <div className="card-actions justify-end mt-5">
              <div className="badge badge-outline bg-rose-400 py-4 border-none">Quantity: {quantity}</div>
              <div className="badge badge-outline py-4 bg-amber-300 border-none">Category : {category}</div>
              <div className="badge badge-outline py-4 bg-green-400 border-none">Price : {price_bdt} BDT</div>
              <div className="badge badge-outline py-4 border-none bg-purple-300">Purchase Count : 0</div>
            </div>
            <Link to={`/purchase/${_id}`}><button className="btn btn-soft btn-success mt-5 w-full">Purchase Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
