import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";

const Book = () => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img
            src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/homunculusvol1.png"
            alt=""
            className="book__img"
          />
        </figure>
      </a>
      <div className="book__title">
        <a href="" className="book__title--link">
          Homunculus
        </a>
      </div>
      <div className="book__ratings">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
      </div>
      <div className="book__price">
        <span className="book__price--normal">$15.00</span>
        $10.00
      </div>
    </div>
  );
};

export default Book;
