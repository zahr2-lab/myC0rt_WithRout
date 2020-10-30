import React from "react";
import Card from "../Card/Card";
import "./ProductsList.scss";

export default function ProductList({ pageProducts }) {
  return (
    <div>
      <div className="productsList">
        {pageProducts.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
