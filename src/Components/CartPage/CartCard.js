import React from "react";
import "./CartCard.scss";
import Controll from "../Controll/Controll";
import { cartListState } from "./CartPage";
import { useRecoilValue } from "recoil";

const CartCard = ({ product }) => {
  const cartList = useRecoilValue(cartListState);
  const a = cartList
    .filter((items) => items.id === product.id)
    .map((obj) => obj.quantity);

  return (
    <div className="cartCard">
      <img className="cartCard-img" src={`/img/${product.name}.png`} alt="" />
      <div className="cartCard-content">
        <div className="cartCard-NamePrice">
          <div className="cartCard-name">{product.name}</div>
          <div className="cartCard-price">$ {product.price}</div>
        </div>
        <Controll id={product.id} />
        <div>total: $ {product.price * a}</div>
      </div>
    </div>
  );
};

export default CartCard;
