import React from "react";
import Explore from "../components/Explore";
import Featured from "../components/Featured";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";
import Discounted from "../components/Discounted";
import { Link } from "react-router-dom";
import Dither from "../components/Dither";

const Home = () => {
  return (
    <>
      <Dither />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Link />
    </>
  );
};

export default Home;
