import axios from "axios";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";

const FoodPurchase = () => {
  const { id: foodId } = useParams();
  const navigate = useNavigate();
  const { user } = UseAuth();
  const {
    name,
    price_bdt,
    ownerEmail,
    quantity: availableQuantity,
  } = useLoaderData();

  useEffect(() => {
    if (availableQuantity === 0) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "warning",
        title: "This food is currently not available",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }, [availableQuantity]);

  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const qty = parseInt(data.foodQuantity);

    if (user?.email === ownerEmail) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "You cannot purchase your own added food!",
      });
      return;
    }

    if (qty > availableQuantity) {
      Swal.fire({
        icon: "warning",
        title: "Quantity Exceeded",
        text: `Only ${availableQuantity} items are available. Please reduce your order quantity.`,
      });
      return;
    }

    const buyerData = {
      foodId: parseInt(foodId),
      foodName: data.foodName,
      foodPrice: data.foodPrice,
      quantity: qty,
      buyingDate: data.buyingDate,
      buyerName: data.buyerName,
      buyerEmail: data.buyerEmail,
    };

    axios
      .post("https://bite-and-bliss-server-side.vercel.app/purchase", buyerData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Purchase Successful",
          text: "Your food has been successfully purchased!",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/dashboard/myorders");
        });
        form.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong while purchasing.",
        });
      });
  };

  return (
    <div className="pt-28 pb-10 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-orange-50 to-white min-h-screen">
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl text-center font-bold mb-8"
        animate={{
          color: [
            "#e11d48",
            "#f59e0b",
            "#22c55e",
            "#3b82f6",
            "#a855f7",
            "#e11d48",
          ],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        🍱 Purchase Your Food Here
      </motion.h1>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <form
          onSubmit={handlePurchaseSubmit}
          className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          {/* Food Name */}
          <label className="block mb-2 font-semibold text-gray-700">
            Food Name
          </label>
          <input
            type="text"
            className="input input-bordered w-full mb-4"
            value={name}
            name="foodName"
            readOnly
          />

          {/* Price */}
          <label className="block mb-2 font-semibold text-gray-700">
            Food Price
          </label>
          <input
            type="text"
            className="input input-bordered w-full mb-4"
            name="foodPrice"
            value={price_bdt}
            readOnly
          />

          {/* Quantity */}
          <label className="block mb-2 font-semibold text-gray-700">
            Quantity (Available: {availableQuantity})
          </label>
          <input
            type="number"
            min="1"
            className="input input-bordered w-full mb-4"
            name="foodQuantity"
            required
            disabled={availableQuantity === 0}
          />

          {/* Buyer Name */}
          <label className="block mb-2 font-semibold text-gray-700">
            Buyer Name
          </label>
          <input
            type="text"
            className="input input-bordered w-full mb-4"
            value={user?.displayName || user?.name || ""}
            readOnly
            name="buyerName"
          />

          {/* Buyer Email */}
          <label className="block mb-2 font-semibold text-gray-700">
            Buyer Email
          </label>
          <input
            type="email"
            className="input input-bordered w-full mb-4"
            value={user?.email || ""}
            readOnly
            name="buyerEmail"
          />

          {/* Date */}
          <label className="block mb-2 font-semibold text-gray-700">
            Buying Date
          </label>
          <input
            type="text"
            className="input input-bordered w-full mb-6"
            value={new Date().toLocaleString()}
            readOnly
            name="buyingDate"
          />

          {/* Buttons */}
          <button
            className="btn btn-primary w-full mb-3"
            disabled={availableQuantity === 0}
          >
            Confirm Purchase
          </button>
          <Link to="/allfood">
            <button
              type="button"
              className="btn btn-outline w-full"
              disabled={availableQuantity === 0}
            >
              Back To Menu Section
            </button>
          </Link>
        </form>
      </motion.div>
    </div>
  );
};

export default FoodPurchase;
