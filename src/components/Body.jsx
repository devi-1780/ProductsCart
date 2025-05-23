import { IoGrid } from "react-icons/io5";
import React from "react";
import { CiGrid2H } from "react-icons/ci";
import { BANNER_IMG } from "../helpers/constants";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import Products from "./Products";
import { useSelector, useDispatch } from "react-redux";
import Shimmer from "./Shimmer";
import useGetProducts from "../hooks/useGetProducts";
import { showGrid, showRow } from "../slices/gridShowSlice";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../helpers/firebase";
function Body() {
  let navigate = useNavigate();
  useGetProducts();
  let gridRef = useRef(null);
  let rowRef = useRef(null);
  let dispatch = useDispatch();
  let user = useSelector((store) => store.user.user);
  let products = useSelector((store) => store.products.products);
  let isGrid = useSelector((store) => store.grid.isShowGrid);
  let [items, setItems] = useState([]);
  const [selectedRating, setSelectedRating] = useState("Rating");
  const [selectedPrice, setSelectedPrice] = useState("Price");

  useEffect(() => {
    setItems(products);
  }, [products]);

  function handleSignout() {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }

  function handleGridShow() {
    dispatch(showRow());
    gridRef.current.classList.add("text-green-800");
    rowRef.current.classList.remove("text-green-800");
  }

  function handleRowShow() {
    dispatch(showGrid());
    rowRef.current.classList.add("text-green-800");
    gridRef.current.classList.remove("text-green-800");
  }

  function applyFilters(rating, price) {
    let filtered = products;

    if (rating !== "Rating") {
      filtered = filtered.filter((item) => item.rating.rate > Number(rating));
    }

    if (price !== "Price") {
      filtered = filtered.filter((item) => item.price >= Number(price));
    }

    setItems(filtered);
  }

  function filterByRating(e) {
    const val = e.target.value;
    setSelectedRating(val);
    applyFilters(val, selectedPrice);
  }

  function filterByPrice(e) {
    const val = e.target.value;
    setSelectedPrice(val);
    applyFilters(selectedRating, val);
  }
  function handleSearch(e) {
    let searchItems = products.filter((pro) =>
      pro.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setItems(searchItems);
  }

  return (
    <div className="px-4 mt-4 cursor-pointer">
      <div className="bg-blue-900 p-4 w-full lg:bg-transparent ">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search for product"
          className="w-full lg:w-full border border-gray-400 px-4 py-2 rounded-3xl"
        />
      </div>
      <div className="flex mt-4 rounded w-full bg-purple-600 md:hidden">
        <p className="font-bold text-lg pl-2 pt-4">
          Grab upto 50% off on <br /> Selected Products
        </p>
        <img src={BANNER_IMG} alt="banner-image" className="w-[150px]" />
      </div>
      <div className="mt-6 flex justify-between items-center px-6">
        <div className="flex gap-4">
          <span
            ref={gridRef}
            className="text-black text-3xl cursor-pointer"
            onClick={handleGridShow}
          >
            <IoGrid />
          </span>
          <span
            ref={rowRef}
            className="text-black text-3xl cursor-pointer"
            onClick={handleRowShow}
          >
            <CiGrid2H />
          </span>
        </div>

        <div className="flex gap-4">
          <select
            className="bg-gray-200 rounded-2xl px-4"
            onChange={filterByRating}
          >
            <option value="Rating">Rating</option>
            <option value="4.5">Above 4.5</option>
            <option value="3.5">Above 3.5</option>
            <option value="3">Above 3</option>
          </select>
          <select
            className="bg-gray-200 rounded-2xl px-4"
            onChange={filterByPrice}
          >
            <option>Price</option>
            <option value="10">Above ₹10</option>
            <option value="100">Above ₹100</option>
            <option value="200">Above ₹200</option>
          </select>
        </div>
      </div>

      {products.length > 0 ? <Products products={items} /> : <Shimmer />}

      <div className="md:fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around py-3 border-t border-gray-300 lg:hidden">
        <div>
          <AiOutlineHome
            onClick={() => navigate("/browse")}
            className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600"
          />
          Home
        </div>
        <div>
          <AiOutlineShoppingCart
            onClick={() => navigate("/browse/cart")}
            className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600"
          />
          Cart
        </div>
        <div>
          <AiOutlineUser
            onClick={() => (user ? handleSignout() : navigate("/login"))}
            className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600"
          />
          {user ? "Logout" : "Login"}
        </div>
      </div>
    </div>
  );
}

export default Body;
