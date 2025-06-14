// // import { useLoaderData, useParams, useNavigate } from "react-router";
// // import UseAuth from "../../Hooks/UseAuth";
// // import axios from "axios";
// // import Swal from "sweetalert2";
// // import { useEffect } from "react";

// // const FoodPurchase = () => {
// //   const { id: foodId } = useParams();
// //   const navigate = useNavigate();
// //   const { user } = UseAuth();
// //   const { name, price_bdt, ownerEmail, quantity: availableQuantity } = useLoaderData();

// //   useEffect(() => {
// //     if (availableQuantity === 0) {
// //       Swal.fire({
// //         toast: true,
// //         position: "top-end",
// //         icon: "warning",
// //         title: "This food is currently not available",
// //         showConfirmButton: false,
// //         timer: 3000,
// //       });
// //     }
// //   }, [availableQuantity]);

// //   const handlePurchaseSubmit = (e) => {
// //     e.preventDefault();
// //     const form = e.target;
// //     const formData = new FormData(form);
// //     const data = Object.fromEntries(formData.entries());
// //     const qty = parseInt(data.foodQuantity);

// //     if (user?.email === ownerEmail) {
// //       Swal.fire({
// //         icon: "error",
// //         title: "Access Denied",
// //         text: "You cannot purchase your own added food!",
// //       });
// //       return;
// //     }

// //     if (qty > availableQuantity) {
// //       Swal.fire({
// //         icon: "warning",
// //         title: "Quantity Exceeded",
// //         text: `Only ${availableQuantity} items are available. Please reduce your order quantity.`,
// //       });
// //       return;
// //     }

// //     const buyerData = {
// //       foodId: parseInt(foodId),
// //       foodName: data.foodName,
// //       foodPrice: data.foodPrice,
// //       quantity: qty,
// //       buyingDate: data.buyingDate,
// //       buyerName: data.buyerName,
// //       buyerEmail: data.buyerEmail,
// //     };

// //     axios
// //       .post("http://localhost:3000/purchase", buyerData)
// //       .then((res) => {
// //         console.log(res);
// //         Swal.fire({
// //           icon: "success",
// //           title: "Purchase Successful",
// //           text: "Your food has been successfully purchased!",
// //           timer: 2000,
// //           showConfirmButton: false,
// //         }).then(() => {
// //           navigate("/myorders");
// //         });
// //         form.reset();
// //       })
// //       .catch((error) => {
// //         Swal.fire({
// //           icon: "error",
// //           title: "Error",
// //           text: "Something went wrong while purchasing.",
// //         });
// //         console.log(error);
// //       });
// //   };

// //   return (
// //     <div>
// //       <h1 className="text-4xl text-center mt-5 font-bold">
// //         Purchase Your Food Here
// //       </h1>
// //       <div className="flex justify-center items-center min-h-screen my-5">
// //         <form onSubmit={handlePurchaseSubmit}>
// //           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs h-auto border p-4 mb-10">
// //             <h1 className="fieldset-legend text-center font-bold text-xl">
// //               Complete Your Food Purchase..!
// //             </h1>

// //             <label className="label">Food Name</label>
// //             <input
// //               type="text"
// //               className="input"
// //               value={name}
// //               name="foodName"
// //               readOnly
// //             />

// //             <label className="label">Food Price</label>
// //             <input
// //               type="text"
// //               className="input"
// //               name="foodPrice"
// //               value={price_bdt}
// //               readOnly
// //             />

// //             <label className="label">
// //               Quantity (Available: {availableQuantity})
// //             </label>
// //             <input
// //               type="number"
// //               min="1"
// //               max={availableQuantity}
// //               className="input"
// //               name="foodQuantity"
// //               required
// //               disabled={availableQuantity === 0}
// //             />

// //             <label className="label">Buyer Name</label>
// //             <input
// //               type="text"
// //               className="input"
// //               value={user?.displayName || user?.name || ""}
// //               readOnly
// //               name="buyerName"
// //             />

// //             <label className="label">Buyer Email</label>
// //             <input
// //               type="email"
// //               className="input"
// //               value={user?.email || ""}
// //               readOnly
// //               name="buyerEmail"
// //             />

// //             <label className="label">Buying Date</label>
// //             <input
// //               type="text"
// //               className="input"
// //               value={new Date().toLocaleString()}
// //               readOnly
// //               name="buyingDate"
// //             />

// //             <button
// //               className="btn btn-soft btn-secondary my-5"
// //               disabled={availableQuantity === 0}
// //             >
// //               Confirm Purchase
// //             </button>
// //           </fieldset>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FoodPurchase;
// import { useLoaderData, useParams, useNavigate } from "react-router";
// import UseAuth from "../../Hooks/UseAuth";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useEffect } from "react";

// const FoodPurchase = () => {
//   const { id: foodId } = useParams();
//   const navigate = useNavigate();
//   const { user } = UseAuth();
//   const { name, price_bdt, ownerEmail, quantity: availableQuantity } = useLoaderData();

//   useEffect(() => {
//     if (availableQuantity === 0) {
//       Swal.fire({
//         toast: true,
//         position: "top-end",
//         icon: "warning",
//         title: "This food is currently not available",
//         showConfirmButton: false,
//         timer: 3000,
//       });
//     }
//   }, [availableQuantity]);

//   const handlePurchaseSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());
//     const qty = parseInt(data.foodQuantity);

//     if (user?.email === ownerEmail) {
//       Swal.fire({
//         icon: "error",
//         title: "Access Denied",
//         text: "You cannot purchase your own added food!",
//       });
//       return;
//     }

//     if (qty > availableQuantity) {
//       Swal.fire({
//         icon: "warning",
//         title: "Quantity Exceeded",
//         text: `Only ${availableQuantity} items are available. Please reduce your order quantity.`,
//       });
//       return;
//     }

//     const buyerData = {
//       foodId: parseInt(foodId),
//       foodName: data.foodName,
//       foodPrice: data.foodPrice,
//       quantity: qty,
//       buyingDate: data.buyingDate,
//       buyerName: data.buyerName,
//       buyerEmail: data.buyerEmail,
//     };

//     axios
//       .post("http://localhost:3000/purchase", buyerData)
//       .then((res) => {
//         console.log(res);
//         Swal.fire({
//           icon: "success",
//           title: "Purchase Successful",
//           text: "Your food has been successfully purchased!",
//           timer: 2000,
//           showConfirmButton: false,
//         }).then(() => {
//           navigate("/myorders");
//         });
//         form.reset();
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Something went wrong while purchasing.",
//         });
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <h1 className="text-4xl text-center mt-5 font-bold">
//         Purchase Your Food Here
//       </h1>
//       <div className="flex justify-center items-center min-h-screen my-5">
//         <form onSubmit={handlePurchaseSubmit}>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs h-auto border p-4 mb-10">
//             <h1 className="fieldset-legend text-center font-bold text-xl">
//               Complete Your Food Purchase..!
//             </h1>

//             <label className="label">Food Name</label>
//             <input
//               type="text"
//               className="input"
//               value={name}
//               name="foodName"
//               readOnly
//             />

//             <label className="label">Food Price</label>
//             <input
//               type="text"
//               className="input"
//               name="foodPrice"
//               value={price_bdt}
//               readOnly
//             />

//             <label className="label">
//               Quantity (Available: {availableQuantity})
//             </label>
//             <input
//               type="number"
//               min="1"
//               max={availableQuantity}
//               className="input"
//               name="foodQuantity"
//               required
//               disabled={availableQuantity === 0}
//               onInput={(e) => {
//                 const value = parseInt(e.target.value);
//                 if (value > availableQuantity) {
//                   e.target.value = availableQuantity;
//                 }
//               }}
//             />

//             <label className="label">Buyer Name</label>
//             <input
//               type="text"
//               className="input"
//               value={user?.displayName || user?.name || ""}
//               readOnly
//               name="buyerName"
//             />

//             <label className="label">Buyer Email</label>
//             <input
//               type="email"
//               className="input"
//               value={user?.email || ""}
//               readOnly
//               name="buyerEmail"
//             />

//             <label className="label">Buying Date</label>
//             <input
//               type="text"
//               className="input"
//               value={new Date().toLocaleString()}
//               readOnly
//               name="buyingDate"
//             />

//             <button
//               className="btn btn-soft btn-secondary my-5"
//               disabled={availableQuantity === 0}
//             >
//               Confirm Purchase
//             </button>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FoodPurchase;
import { useLoaderData, useParams, useNavigate } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";

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
      .post("http://localhost:3000/purchase", buyerData)
      .then((res) => {
        console.log(res);
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
      <h1 className="text-4xl text-center mt-5 font-bold">
        Purchase Your Food Here
      </h1>
      <div className="flex justify-center items-center min-h-screen my-5">
        <form onSubmit={handlePurchaseSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs h-auto border p-4 mb-10">
            <h1 className="fieldset-legend text-center font-bold text-xl">
              Complete Your Food Purchase..!
            </h1>

            <label className="label">Food Name</label>
            <input
              type="text"
              className="input"
              value={name}
              name="foodName"
              readOnly
            />

            <label className="label">Food Price</label>
            <input
              type="text"
              className="input"
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
              className="input"
              name="foodQuantity"
              required
              disabled={availableQuantity === 0}
            />

            <label className="label">Buyer Name</label>
            <input
              type="text"
              className="input"
              value={user?.displayName || user?.name || ""}
              readOnly
              name="buyerName"
            />

            <label className="label">Buyer Email</label>
            <input
              type="email"
              className="input"
              value={user?.email || ""}
              readOnly
              name="buyerEmail"
            />

            <label className="label">Buying Date</label>
            <input
              type="text"
              className="input"
              value={new Date().toLocaleString()}
              readOnly
              name="buyingDate"
            />

            <button
              className="btn btn-soft btn-secondary my-5"
              disabled={availableQuantity === 0}
            >
              Confirm Purchase
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default FoodPurchase;

