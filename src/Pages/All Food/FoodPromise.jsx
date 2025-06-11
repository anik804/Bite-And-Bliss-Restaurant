import React, { Suspense } from 'react';
import AllFood from './AllFood';

const FoodPromise = () => {
  const foodPromise = fetch('http://localhost:3000/menu').then(res => res.json());
  return (
    <Suspense fallback={<div>Loading menu...</div>}>
      <AllFood foodPromise={foodPromise} />
    </Suspense>
  );
};

export default FoodPromise;


