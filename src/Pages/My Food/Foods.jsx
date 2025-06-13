import React, { use } from "react";
import { Link } from "react-router";

const Foods = ({ foodCreatedByPromise }) => {
  const food = use(foodCreatedByPromise);
  return (
    <div>
      <h2 className="text-2xl">{food.length}</h2>
      <div className="my-10 w-3/5 mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food Name</th>
                <th>Food Category</th>
                <th>Food Cuisine</th>
                <th>Food Price</th>
                <th>Quantity</th>
                <th>Purchase Count</th>
              </tr>
            </thead>
            <tbody>
              {food.map((foods,index) => 
                <tr key={foods._id}>
                  <th>{index+1}</th>
                  <td>{foods.name}</td>
                  <td>{foods.category}</td>
                  <td>{foods.cuisine}</td>
                  <td>{foods.price_bdt} BDT</td>
                  <td>{foods.quantity}</td>
                  <td className="btn btn-dash btn-success my-3"><Link to={`/`}>Purchase Amount</Link></td>
                  
                </tr>
              )}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Foods;
