import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
const AllFood = () => {

  const [foods,setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/menu")
    .then((res) =>{
      setFood(res.data);
      setLoading(false);
    })
    .catch((err) =>{
        setError(err.message || "Error fetching data");
        setLoading(false);
    })
  },[])

  if (loading) return <div>Loading Our Menu...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className='text-2xl font-bold text-center my-10'>Menu Section</h1>
      {/* {foods.length} */}
      <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5 mx-5'>
        {
          foods.map(food => <FoodCard food={food} key={food._id}></FoodCard>)
        }
      </div>
    </div>
  );
};

export default AllFood;