import React, { useState, useEffect } from "react";
import { atom, useRecoilValue } from "recoil";
import CartCard from "./CartCard";
import { productsState } from "../Page/Page";
import "./CartCard.scss";
import { Link } from "react-router-dom";

export const cartListState = atom({
  key: "cartList",
  default: []
});

export default function CartPage() {
  const cartList = useRecoilValue(cartListState);
  const products = useRecoilValue(productsState);
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartProducts(
      products.filter((obj) =>
        cartList.map((items) => items.id).includes(obj.id)
      )
    );
    cartList.length &&
      setTotal(
        cartList
          .map(
            (obj) =>
              products
                .filter((items) => items.id === obj.id)
                .map((items) => items.price) * obj.quantity
          )
          .reduce((a, b) => a + b)
      );
  }, [cartList, products]);

  return (
    <div>
      <div className="cartItems">
        {cartProducts.map((obj) => (
          <div key={obj.id}>
            <CartCard product={obj} />
          </div>
        ))}
      </div>
      <div className="total">
        <div></div>
        <div>total: $ {total}</div>
      </div>
      {total > 0 && (
        <Link to="/Proceed">
          <div className="proceed">Proceed</div>
        </Link>
      )}
    </div>
  );
}
