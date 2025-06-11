import React from 'react';
import Environment from './Environment/Environment';
import Food from './Food/Food';
import Seafood from './Seafood/Seafood';
import Drinks from './Drinks/Drinks';

const Gallery = () => {
  return (
    <div>
      <Environment></Environment>
      <Food></Food>
      <Seafood></Seafood>
      <Drinks></Drinks>
    </div>
  );
};

export default Gallery;