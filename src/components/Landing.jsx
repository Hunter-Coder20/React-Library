import React from "react";
import UndrawBooks from "../assets/pngegg.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="Landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Welcome to the Strawhat Family</h1>
            <h2>
              <span className="orange">
                Find your favorites in Strawhat Library
              </span>
            </h2>
            <Link to="/books">
              <button className="btn">Browse books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
