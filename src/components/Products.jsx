import Product from "./Product";
import React from "react";
function Products({ products, isGridShow }) {
  console.log(products);
  if (products.length === 0)
    return (
      <div>
        <h1 className="text-center h-[200px] text-blue-800 text-2xl pt-20">
          No results Found
        </h1>
      </div>
    );
  return (
    <div>
      <div className={!isGridShow ? `flex flex-wrap mt-6` : `flex flex-col`}>
        {products &&
          products.map((pro) => <Product key={pro.id} product={pro} />)}
      </div>
    </div>
  );
}
export default Products;
