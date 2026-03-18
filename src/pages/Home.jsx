import React from "react";
import Explore from "../components/Explore";
import Featured from "../components/Featured";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";
import Discounted from "../components/Discounted";
import Dither from "../components/Dither";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page__content">
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
      </div>
    </div>
  );
};

export default Home;