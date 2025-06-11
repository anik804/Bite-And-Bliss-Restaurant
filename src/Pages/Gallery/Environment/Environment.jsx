import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EnvironmentCard from './EnvironmentCard';

const Environment = () => {
  
  const [enviro, setEnviro] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/environment")
      .then(res => {
        setEnviro(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || "Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading environment data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='my-10'>
      <h1 className='text-2xl text-center font-bold'>Our Environment</h1>
      {/* {enviro.length} */}
      <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5 mx-5'>
        {
          enviro.map(envi => <EnvironmentCard key={envi._id} envi={envi}></EnvironmentCard>)
        }
      </div>
    </div>
  );
};

export default Environment;
