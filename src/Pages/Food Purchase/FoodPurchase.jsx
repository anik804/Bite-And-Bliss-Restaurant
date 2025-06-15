import axios from "axios";
import { motion } from "framer-motion"; // <- import framer motion
import { useEffect } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
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
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Purchase Successful",
          text: "Your food has been successfully purchased!",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/myorders");
        });
        form.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong while purchasing.",
        });
        console.log(error);
      });
  };

  return (
    <div>
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl text-center mt-5 font-bold mb-10"
        animate={{
          color: [
            "#e11d48", // rose
            "#f59e0b", // amber
            "#22c55e", // green
            "#3b82f6", // blue
            "#a855f7", // violet
            "#e11d48", // back to rose
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

      <div className="flex justify-center items-center min-h-screen my-5 px-4">
        <form onSubmit={handlePurchaseSubmit} className="w-full max-w-md">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6">
            <label className="label">Food Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              name="foodName"
              readOnly
            />

            <label className="label">Food Price</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="foodPrice"
              value={price_bdt}
              readOnly
            />

            <label className="label">
              Quantity (Available: {availableQuantity})
            </label>
            <input
              type="number"
              min="1"
              className="input input-bordered w-full"
              name="foodQuantity"
              required
              disabled={availableQuantity === 0}
            />

            <label className="label">Buyer Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={user?.displayName || user?.name || ""}
              readOnly
              name="buyerName"
            />

            <label className="label">Buyer Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={user?.email || ""}
              readOnly
              name="buyerEmail"
            />

            <label className="label">Buying Date</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={new Date().toLocaleString()}
              readOnly
              name="buyingDate"
            />

            <button
              className="btn btn-primary my-5 w-full"
              disabled={availableQuantity === 0}
            >
              Confirm Purchase
            </button>
            <Link to="/allfood">
              <button
                className="btn btn-secondary my-5 w-full"
                disabled={availableQuantity === 0}
              >
                Back To Menu Section
              </button>
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default FoodPurchase;
