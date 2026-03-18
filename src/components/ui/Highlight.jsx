import React from "react";

const Highlight = ({ icon, title, para }) => {
  return (
    <div className="highlight orange">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="h3 highlight__subtitle">{title}</h3>
      <p className="highlight__para">
        {para}
      </p>
    </div>
  );
};

export default Highlight;
