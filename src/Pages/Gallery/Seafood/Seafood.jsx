import axios from "axios";
import React, { useEffect, useState } from "react";
import SeafoodCard from "./SeafoodCard";

const Seafood = () => {
  const [sea, setSea] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/seafood")
      .then((res) => {
        setSea(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading Sea food data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
  <div className="my-10">
    <h1 className='text-2xl text-center font-bold'>Our Seafood Items</h1>
    {/* {sea.length} */}
    <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5 mx-5'>
      {
        sea.map(seafood => <SeafoodCard seafood={seafood} key={seafood._id}></SeafoodCard>)

      }
    </div>

  </div>
  );
};

export default Seafood;
