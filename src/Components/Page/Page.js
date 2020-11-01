import React, { useEffect, useState } from "react";
import Products from "../ProductsList/ProductsList";
import { atom, useRecoilValue } from "recoil";
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
  const productList = useRecoilValue(productsState);
  const [pageProducts, setPageProducts] = useState([]);

  let { page } = useParams();

  useEffect(() => {
    setPageProducts(productList.filter((obj) => obj.catagory === page));
  }, [productList, page]);

  return <Products pageProducts={pageProducts} />;
};

export default Page;
