import React, { useEffect, useState } from "react";
import "./Controll.scss";
import { atomFamily, useRecoilState } from "recoil";
import { cartListState } from "../CartPage/CartPage";

export const productQuantityState = atomFamily({
  key: "productQuantity",
  default: { id: "", quantity: 0 }
});

export default function Controll(props) {
  const [{ id, quantity }, setProductQuantity] = useRecoilState(
    productQuantityState(props.id)
  );
  const [cartList, setCartList] = useRecoilState(cartListState);
  const [count, setCount] = useState(quantity);

  const action = (add) => {
    const newCartList = cartList.filter((obj) => obj.id !== props.id);
    var a;
    add ? (a = count + 1) : (a = count - 1);

    setCount(a);
    setProductQuantity({ id, quantity: a });
    if (a > 0) {
      localStorage.setItem(
        "cartList",
        JSON.stringify([...newCartList, { id: props.id, quantity: a }])
      );
      setCartList([...newCartList, { id: props.id, quantity: a }]);
    } else {
      localStorage.setItem("cartList", JSON.stringify(newCartList));
      setCartList(newCartList);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("cartList")) {
      var items = JSON.parse(localStorage.getItem("cartList"));
      var item = items.find((obj) => obj.id === props.id);
      if (item) {
        setCount(item.quantity);
      }
    }
  }, [props.id]);

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
