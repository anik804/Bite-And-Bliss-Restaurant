import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const Food = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/food")
      .then((res) => {
        setFood(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading food data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
  <div className="my-10">
    <h1 className='text-2xl text-center font-bold'>Our Food</h1>
    {/* {food.length} */}
    <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5 mx-5'>
      {
        food.map(foods => <FoodCard foods={foods} key={foods._id}></FoodCard>)
      }
    </div>

  </div>
  );
};

export default Food;
