import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, menuState } from "../../App.js";
import { productsQuantityState } from "../Page/Page";
import "./TopBar.scss";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [cart, setCart] = useRecoilState(cartState);
  const [menu, setMenu] = useRecoilState(menuState);
  const quantity = useRecoilValue(productsQuantityState);

  return (
    <div className="topBar">
      <div className="topBar-Burger" onClick={() => setMenu(!menu)}>
        |||
      </div>
      <div className="topBar-Cart" onClick={() => setCart(!cart)}>
        <Link to="/Cart">
          <span className="topBar-Cart-point">{quantity}</span>
          <span>&#128722;</span>
        </Link>
      </div>
    </div>
  );
}
