import React from "react";

import "./card.css";

const Bod = ({ img, head, price }) => {
  return (
    <div className="card card-shadow">
      <div className="card-img">
        <img src={img} alt="bag" />
      </div>
      <div className="card-header">
        <h4>{head}</h4>
        <h4 className="card__h4">Price {price}shs</h4>
      </div>
    </div>
  );
};

export default Bod;
