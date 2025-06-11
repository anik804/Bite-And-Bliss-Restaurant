import React from 'react';
import Welcome from './Welcome_Page/Welcome';
import Chef from './Chef_Section/Chef';
import Stat from './Stat_Section/Stat';

const Home = () => {

  return (
    <div>
      {/* <h1>This is home</h1> */}
      <Welcome></Welcome>
      <Chef></Chef>
      <Stat></Stat>
    </div>
  );
};

export default Home;