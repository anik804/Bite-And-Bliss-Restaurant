import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = UseAuth();

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // change done
    delete data._id;

    console.log(data);

    // const

    axios
      .post("http://localhost:3000/menu", data)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Your Food Added Successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-5">
      <h1 className="text-center font-bold my-5 text-3xl border-2 w-3/5 mx-auto py-5 rounded-2xl">
        Add a New Delight to the Menu
      </h1>
      <div className="flex justify-center">
        <form onSubmit={handleAddFood}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <h1 className="font-bold text-xl text-center my-5">
              Provide Complete Dish Information
            </h1>

            <label className="label">Food Name</label>
            <input
              type="text"
              className="input w-md"
              name="name"
              placeholder="Enter Food Name"
              required
            />

            <label className="label">Cuisine</label>
            <input
              type="text"
              className="input w-md"
              name="cuisine"
              placeholder="Enter Food Cuisine"
              required
            />

            <label className="label">Category</label>
            <select
              defaultValue="Pick a Category"
              className="select select-primary w-md"
              name="category"
              required
            >
              <option disabled={true}>Pick a Category</option>
              <option>breakfast</option>
              <option>lunch</option>
              <option>dinner</option>
              <option>snack</option>
              <option>seafood</option>
              <option>beverage</option>
            </select>
            <label className="label">Quantity</label>
            <input
              type="number"
              min={1}
              max={5}
              name="quantity"
              className="input w-md"
              placeholder="Enter Food Quantity"
              required
            />
            <label className="label">Food Price</label>
            <input
              type="number"
              min={0}
              name="price_bdt"
              className="input w-md"
              placeholder="Enter Food Price"
              required
            />
            <label className="label">Food Description</label>
            <textarea
              className="textarea w-md"
              placeholder="Description"
              name="description"
              required
            ></textarea>
            <label className="label">Food Photo URL</label>
            <input
              type="url"
              name="photo"
              className="input w-md"
              placeholder="Enter Food Picture URL"
              required
            />
            <label className="label">Food Owner Name</label>
            <input
              type="text"
              name="ownerName"
              defaultValue={user.displayName}
              className="input w-md"
              placeholder="Food Owner Name"
              required
              readOnly
            />
            <label className="label">Food Owner Email</label>
            <input
              type="text"
              name="ownerEmail"
              className="input w-md"
              placeholder="Food Owner Email"
              defaultValue={user.email}
              required
              readOnly
            />
            <button className="btn btn-soft btn-warning my-5">Add Food</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
