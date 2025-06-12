import React from 'react';
import Welcome from './Welcome_Page/Welcome';
import Chef from './Chef_Section/Chef';
import Stat from './Stat_Section/Stat';
import Carousel from './Carousel/Carousel';
// import {render} from 'react-dom';

const Home = () => {

  return (
    <div>
      {/* <h1>This is home</h1> */}
      <Welcome></Welcome>
      {/* <Carousel></Carousel> */}
      {/* <Carousel></Carousel> */}
      <Chef></Chef>
      <Stat></Stat>
    </div>
  );
};

export default Home;