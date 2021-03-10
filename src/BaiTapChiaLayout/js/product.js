import React from "react";
import Product_smartphone from "./product_smartphone";
import Product_laptop from "./product_laptop";
export default function Product() {
  return (
    <div className="container-fluid">
      <div className="pt-5 pb-5">
        <Product_smartphone />
      </div>
      <div className="pt-5 pb-5 bg-light text-dark">
        <Product_laptop />
      </div>
    </div>
  );
}
