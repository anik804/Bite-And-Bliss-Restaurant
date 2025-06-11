import axios from "axios";
import React, { useEffect, useState } from "react";
import DrinksCard from "./DrinksCard";

const Drinks = () => {
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/drinks")
      .then((res) => {
        setDrink(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading Beverage Curator data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
  <div className="my-10">
    <h1 className='text-2xl text-center font-bold'>Our Beverage Curator</h1>
    {/* {drink.length} */}
    <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5 mx-5'>
      {
        drink.map(drinks => <DrinksCard drinks={drinks} key={drinks._id}></DrinksCard>)
      }
    </div>

  </div>

  );
};

export default Drinks;
