import React from 'react';
import Environment from './Environment/Environment';
import Food from './Food/Food';
import Seafood from './Seafood/Seafood';
import Drinks from './Drinks/Drinks';
import Inside from './Outside Environment/Inside';

const Gallery = () => {
  return (
    <div className="pt-24"> {/* Added padding to prevent navbar overlap */}
      <Inside />
      <Environment />
      <Food />
      <Seafood />
      <Drinks />
    </div>
  );
};

export default Gallery;
