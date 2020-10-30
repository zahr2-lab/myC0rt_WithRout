import React, { useEffect, useState } from "react";
import Products from "../ProductsList/ProductsList";
import { atom, useSetRecoilState } from "recoil";
import products from "../ProductsList/products";
import "./Page.scss";
import { useParams } from "react-router-dom";

export const productsState = atom({
  key: "productsList",
  default: []
});

export const productsQuantityState = atom({
  key: "productsQuantity",
  default: 0
});

const Page = () => {
  const setProductList = useSetRecoilState(productsState);
  const [pageProducts, setPageProducts] = useState([]);

  let { page } = useParams();

  useEffect(() => {
    setProductList(products);
    setPageProducts(products.filter((obj) => obj.catagory === page));
  }, [setPageProducts]);

  return <Products pageProducts={pageProducts} />;
};

export default Page;
