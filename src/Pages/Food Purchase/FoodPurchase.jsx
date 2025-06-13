import { useLoaderData, useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";

const FoodPurchase = () => {
  const { id: foodId } = useParams();
  const { user } = UseAuth();
  const { name, price_bdt } = useLoaderData();

  console.log(foodId, user);

  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const buyerData = {
      foodId,
      foodName: data.foodName,
      foodPrice: data.foodPrice,
      quantity: data.fooQuantity,
      buyingDate: data.buyingDate,
      buyerName: data.buyerName,
      buyerEmail: data.buyerEmail,
    };

    console.log("buyer data : ",buyerData);

  //   axios.post('http://localhost:3000/purchase',buyerData)
  //   .then(res =>{
  //     console.log(res.data);
  //   })
  //   .catch(error =>{
  //     console.log(error);
  //   })
  axios.post('http://localhost:3000/purchase',buyerData)
  .then(res =>{
    console.log(res.data);
  })
  .catch(error =>{
    console.log(error);
  })


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
              placeholder="Enter Food Name"
              value={name}
              name="foodName"
              readOnly
            />

            <label className="label">Food Price</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Price"
              name="foodPrice"
              value={price_bdt}
              readOnly
            />

            <label className="label">Quantity</label>
            <input
              type="number"
              min="1"
              max="5"
              className="input"
              placeholder="Food Quantity"
              name="fooQuantity"
            />

            <label className="label">Buyer Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              value={user?.displayName || user?.name || ""}
              readOnly
              name="buyerName"
            />

            <label className="label">Buyer Email</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              value={user?.email || ""}
              readOnly
              name="buyerEmail"
            />
            <label className="label">Buying Date</label>
            <input
              type="text"
              className="input"
              value={new Date().toLocaleString()} // shows formatted date & time
              readOnly
              name="buyingDate"
            />
            <button className="btn btn-soft btn-secondary my-5">
              Confirm Purchase
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default FoodPurchase;
