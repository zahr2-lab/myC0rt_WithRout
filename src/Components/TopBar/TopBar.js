import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { menuState } from "../../App.js";
import { cartListState } from "../CartPage/CartPage";
import "./TopBar.scss";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [menu, setMenu] = useRecoilState(menuState);
  const cartList = useRecoilValue(cartListState);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    cartList.length
      ? setQuantity(cartList.map((obj) => obj.quantity).length)
      : setQuantity(0);
  }, [cartList]);
  return (
    <div className="topBar">
      <div className="topBar-Burger" onClick={() => setMenu(!menu)}>
        |||
      </div>
      <div className="topBar-Cart">
        <Link to="/Cart">
          <span className="topBar-Cart-point">{quantity}</span>
          <span role="img" aria-label="cart">
            &#128722;
          </span>
        </Link>
      </div>
    </div>
  );
}
