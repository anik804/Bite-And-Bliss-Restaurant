import axios from "axios";
import { useEffect, useState } from "react";

const TopPurchased = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/top-purchased").then((res) => {
      setTopFoods(res.data);
    });
  }, []);

  return (
    <section className="my-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-6">
        🍽️ Top 6 Most Purchased Foods
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topFoods.map((food) => (
          <div key={food._id} className="card bg-base-100 shadow-xl p-4">
            <figure>
              <img
                src={food.photo}
                alt={food.name}
                className="w-full h-48 object-cover rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold">{food.name}</h3>
              <p className="text-gray-600">Price: ৳{food.price_bdt}</p>
              <p className="text-sm text-green-600 font-medium">
                Purchased: {food.totalQuantity} times
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPurchased;
