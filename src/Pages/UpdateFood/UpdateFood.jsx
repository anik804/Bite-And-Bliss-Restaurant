import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import bg from "../../assets/bg.jpg";

const UpdateFood = () => {
  const food = useLoaderData(); // Get initial food data from loader
  const { user } = UseAuth();
  const navigate = useNavigate();

  // Initialize form data state with the loaded food object
  const [formData, setFormData] = useState(food || {});

  // Handle input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for updating food info
  const handleUpdate = (e) => {
    e.preventDefault();

    // Prepare updated data with numeric fields cast to numbers and owner info set explicitly
    const updatedData = {
      ...formData,
      quantity: Number(formData.quantity),
      price_bdt: Number(formData.price_bdt),
      ownerName: user.displayName,
      ownerEmail: user.email,
    };

    axios
      .put(`http://localhost:3000/menu/${food._id}`, updatedData)
      .then(() => {
        Swal.fire({
          title: "Food Updated Successfully",
          icon: "success",
        });
        navigate("/myfood");
      })
      .catch(() => {
        Swal.fire({
          title: "Error updating food",
          icon: "error",
        });
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-4xl w-full bg-base-200 bg-opacity-90 rounded-lg p-6 shadow-lg my-10">
        <h1 className="text-center font-bold my-5 text-3xl border-2 py-5 rounded-2xl border-gray-300 bg-white bg-opacity-70">
          Update Food Information
        </h1>
        <form onSubmit={handleUpdate}>
          <fieldset>
            <h2 className="font-bold text-xl text-center mb-6">
              You can update your dish info here
            </h2>

            <label className="label block mb-1 font-medium">Food Name</label>
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              required
            />

            <label className="label block mb-1 font-medium">Cuisine</label>
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              name="cuisine"
              value={formData.cuisine || ""}
              onChange={handleChange}
              required
            />

            <label className="label block mb-1 font-medium">Category</label>
            <select
              className="select select-primary w-full mb-4"
              name="category"
              value={formData.category || ""}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select category
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
              name="quantity"
              className="input input-bordered w-full mb-4"
              value={formData.quantity || ""}
              onChange={handleChange}
              required
            />

            <label className="label block mb-1 font-medium">Food Price</label>
            <input
              type="number"
              name="price_bdt"
              className="input input-bordered w-full mb-4"
              value={formData.price_bdt || ""}
              onChange={handleChange}
              required
            />

            <label className="label block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full mb-4"
              value={formData.description || ""}
              onChange={handleChange}
              required
            ></textarea>

            <label className="label block mb-1 font-medium">Photo URL</label>
            <input
              type="url"
              name="photo"
              className="input input-bordered w-full mb-4"
              value={formData.photo || ""}
              onChange={handleChange}
              required
            />

            <label className="label block mb-1 font-medium">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={user.displayName || ""}
              readOnly
              className="input input-bordered w-full mb-4"
              placeholder="Owner Name"
            />

            <label className="label block mb-1 font-medium">Owner Email</label>
            <input
              type="email"
              name="ownerEmail"
              value={user.email || ""}
              readOnly
              className="input input-bordered w-full mb-6"
              placeholder="Owner Email"
            />

            <button className="btn btn-warning w-full text-white font-semibold hover:bg-yellow-600 transition-colors my-2">
              Update Food
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
