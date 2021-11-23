import React from 'react';
import WildLogo from '../WildLogo';
import HomeBlog from '../HomeBlog';
import HomeCarousel from '../Carousel';
import './index.css';

function Home() {
  return (
    <div className="home">
      <WildLogo />
      <HomeBlog />
      <HomeCarousel />
    </div>
  );
}

export default Home;
