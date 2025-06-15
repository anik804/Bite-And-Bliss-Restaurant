import React from 'react';
import Environment from './Environment/Environment';
import Food from './Food/Food';
import Seafood from './Seafood/Seafood';
import Drinks from './Drinks/Drinks';
import Inside from './Outside Environment/Inside';

const Gallery = () => {
  return (
    <div>
      <Inside></Inside>
      <Environment></Environment>
      <Food></Food>
      <Seafood></Seafood>
      <Drinks></Drinks>
    </div>
  );
};

export default Gallery;