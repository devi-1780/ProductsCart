import shop_logo from "../assets/shop_logo.jpg";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function LogoSection() {
  let cartItems = useSelector((store) => store.cart.cartItems);

  function handleCartShow() {}
  return (
    <div className="hidden lg:flex justify-between ">
      <div>
        <img src={shop_logo} alt="logo" className="w-[100px]" />
      </div>
      <div>
        <Link to="/browse/cart">
          <button
            onClick={handleCartShow}
            className="bg-green-700 text-white flex justify-center items-center mt-8 mr-28 py-2 px-4 rounded-full"
          >
            <span className="text-2xl">
              <MdOutlineShoppingCart />
            </span>
            <span>View cart {cartItems.length}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default LogoSection;
