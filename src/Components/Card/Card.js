import React from "react";
import "./Card.scss";
import Controll from "../Controll/Controll";

const Card = ({ product }) => {
  return (
    <div className="card">
      <img className="card-img" src={`/img/${product.name}.png`} alt="" />
      <div className="card-content">
        <div className="card-name">{product.name}</div>
        <div className="card-price">$ {product.price}</div>
      </div>
      <Controll id={product.id} />
    </div>
  );
};

export default Card;
