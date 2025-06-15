import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import bg from "../../assets/bg.jpg"; // <-- import your bg image here
import { Link } from "react-router";

const AddFood = () => {
  const { user } = UseAuth();

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    delete data._id;

    axios
      .post("http://localhost:3000/menu", data,{withCredentials: true})
      .then(() => {
        Swal.fire({
          title: "Your Food Added Successfully",
          icon: "success",
          draggable: true,
        });
        form.reset();
      })
      .catch(() => {
        Swal.fire({
          title: "Error adding food",
          icon: "error",
          text: "Please try again later.",
        });
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-4xl w-full bg-base-200 bg-opacity-90 rounded-lg p-6 shadow-lg my-10">
        <h1 className="text-center font-bold my-5 text-3xl border-2 py-5 rounded-2xl border-gray-300 bg-white bg-opacity-70">
          Add a New Delight to the Menu
        </h1>
        <form onSubmit={handleAddFood}>
          <fieldset>
            <h2 className="font-bold text-xl text-center mb-6">
              Please Provide Complete Dish Information
            </h2>

            <label className="label block mb-1 font-medium">Food Name</label>
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              name="name"
              placeholder="Enter Food Name"
              required
            />

            <label className="label block mb-1 font-medium">Cuisine</label>
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              name="cuisine"
              placeholder="Enter Food Cuisine"
              required
            />

            <label className="label block mb-1 font-medium">Category</label>
            <select
              defaultValue=""
              className="select select-primary w-full mb-4"
              name="category"
              required
            >
              <option value="" disabled>
                Pick a Category
              </option>
              <option>breakfast</option>
              <option>lunch</option>
              <option>dinner</option>
              <option>snack</option>
              <option>seafood</option>
              <option>beverage</option>
            </select>

            <label className="label block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              min={1}
              max={5}
              name="quantity"
              className="input input-bordered w-full mb-4"
              placeholder="Enter Food Quantity"
              required
            />

            <label className="label block mb-1 font-medium">Food Price</label>
            <input
              type="number"
              min={0}
              name="price_bdt"
              className="input input-bordered w-full mb-4"
              placeholder="Enter Food Price"
              required
            />

            <label className="label block mb-1 font-medium">Food Description</label>
            <textarea
              className="textarea textarea-bordered w-full mb-4"
              placeholder="Description"
              name="description"
              required
            ></textarea>

            <label className="label block mb-1 font-medium">Food Photo URL</label>
            <input
              type="url"
              name="photo"
              className="input input-bordered w-full mb-4"
              placeholder="Enter Food Picture URL"
              required
            />

            <label className="label block mb-1 font-medium">Food Owner Name</label>
            <input
              type="text"
              name="ownerName"
              defaultValue={user.displayName}
              className="input input-bordered w-full mb-4"
              placeholder="Food Owner Name"
              required
              readOnly
            />

            <label className="label block mb-1 font-medium">Food Owner Email</label>
            <input
              type="email"
              name="ownerEmail"
              className="input input-bordered w-full mb-6"
              placeholder="Food Owner Email"
              defaultValue={user.email}
              required
              readOnly
            />

            <button className="btn btn-warning w-full text-white font-semibold hover:bg-yellow-600 transition-colors my-2">
              Add Food
            </button>
            <Link to='/allfood'>
                        <button className="btn btn-secondary w-full text-white font-semibold my-2">
              Go Back to All Food
            </button>
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
