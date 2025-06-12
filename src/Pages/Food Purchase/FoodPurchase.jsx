import { useLoaderData, useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";

const FoodPurchase = () => {
  const { id: foodId } = useParams();
  const { user } = UseAuth();
  const {name,price_bdt} = useLoaderData();


  console.log(foodId, user);

  return (
    <div>
      <h1 className="text-4xl text-center mt-5 font-bold">
        Purchase Your Food Here
      </h1>
      <div className="flex justify-center items-center min-h-screen my-5">
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
            readOnly
          />

          <label className="label">Food Price</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Price"
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
          />

          <label className="label">Buyer Name</label>
          <input
            type="text"
            className="input"
            placeholder="Name"
            value={user?.displayName || user?.name || ""}
            readOnly
          />

          <label className="label">Buyer Email</label>
          <input
            type="text"
            className="input"
            placeholder="Name"
            value={user?.email || ""}
            readOnly
          />
          <label className="label">Buying Date</label>
          <input
            type="text"
            className="input"
            value={new Date().toLocaleString()} // shows formatted date & time
            readOnly
          />
          <button className="btn btn-soft btn-secondary my-5">Confirm Purchase</button>
        </fieldset>
      </div>
    </div>
  );
};

export default FoodPurchase;
