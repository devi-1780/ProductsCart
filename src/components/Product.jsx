import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Product({ product }) {
  let navigate = useNavigate();
  let isGrid = useSelector((store) => store.grid.isShowGrid);
  return (
    <>
      <Link to={`products/${product.id}`}>
        <div
          data-testid="proCard"
          className={
            isGrid
              ? "w-[300px] text-black p-4  ml-10 mt-6  hover:bg-gray-300"
              : "flex w-screen text-black p-4  ml-10 mt-6 "
          }
        >
          <div className="flex">
            <img
              src={product.image}
              alt={product.title}
              className="w-[300px] h-[250px] border border-solid border-gray-400 p-4"
            />
            <span className="font-bold text-2xl text-green-800 left-10 mt-56 -ml-6 pb-4">
              <MdOutlineAddShoppingCart />
            </span>
          </div>
          <div
            className={isGrid ? "text-blue-950" : "text-blue-950 m-10 w-6/12"}
          >
            <h1 className="capitalize font-bold text-lg text-blue-950">
              {product.category}
            </h1>
            <p>Price - ₹ {product.price}</p>
            <p>Rating:{product.rating?.rate}</p>
            {!isGrid && <p>{product.description}</p>}
          </div>
        </div>
      </Link>
    </>
  );
}
export default Product;
