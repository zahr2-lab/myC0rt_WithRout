import React, { useEffect, useState } from "react";
import "./Controll.scss";
import { atomFamily, useRecoilState } from "recoil";
import { productsQuantityState } from "../Page/Page";
import { cartListState } from "../CartPage/CartPage";

export const productQuantityState = atomFamily({
  key: "productQuantity",

  default: { id: "", quantity: 0 }
});

export default function Controll(props) {
  const [{ id, quantity }, setProductQuantity] = useRecoilState(
    productQuantityState(props.id)
  );
  const [productsQuantity, setProductsQuantity] = useRecoilState(
    productsQuantityState
  );
  const [cartList, setCartList] = useRecoilState(cartListState);
  const [count, setCount] = useState(quantity);

  const action = (add) => {
    const newCartList = cartList.filter((obj) => obj.id !== props.id);
    var a;
    if (add) {
      a = count + 1;
      setProductsQuantity(productsQuantity + 1);
    } else {
      a = count - 1;
      setProductsQuantity(productsQuantity - 1);
    }
    setCount(a);
    setProductQuantity({ id, quantity: a });
    setCartList([...newCartList, { id: props.id, quantity: a }]);
  };

  return (
    <div className="controll">
      <div
        className={count <= 0 ? "controll-btn" : "controll-add"}
        onClick={() => action(true)}
      >
        +
      </div>

      <div className={`controll-count ${count <= 0 && "hidden"}`}>{count}</div>

      <div
        className={`controll-sub ${count <= 0 && "hidden"}`}
        onClick={() => action(false)}
      >
        -
      </div>
    </div>
  );
}
