// import { useParams } from "react-router-dom";
// import LogoSection from "./LogoSection";
// import React from "react";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addCartItem } from "../slices/cartSlice";
// import Footer from "./Footer";
// import Error from "./Error";
// import Popup from "./Popup";
// import { getProduct } from "../slices/productSlice";
// function AboutProduct() {
//   let navigate = useNavigate();
//   let dispatch = useDispatch();

//   let user = useSelector((store) => store.user.user);

//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   let [product, setProduct] = useState(null);
//   let [errorMsg, setErrorMsg] = useState(null);
//   let { id } = useParams();

//   useEffect(() => {
//     fetchProduct(id);
//   }, [id]);

//   async function fetchProduct(id) {
//     try {
//       let data = await fetch(`https://fakestoreapi.com/products/` + id);
//       let json = await data.json();
//       setProduct(json);
//     } catch (error) {
//       console.log(error);
//       setErrorMsg(error.message);
//     }
//   }

//   function handleAddBtn() {
//     if (user === null) {
//       navigate("/login");
//       return;
//     }
//     setIsPopupOpen(true);
//     setTimeout(() => {
//       setIsPopupOpen(false);
//     }, 3000);
//     dispatch(addCartItem(product));
//     dispatch(getProduct(product));
//   }

//   function handleBackBtn() {
//     navigate("/browse");
//   }
//   function handlePopupPageClose() {
//     setIsPopupOpen(false);
//   }
//   if (errorMsg) return <Error error={errorMsg} />;

//   return (
//     <>
//       <div className="container mx-auto px-4">
//         <LogoSection />
//         <h1 className="text-center text-blue-900 font-bold text-2xl mt-4">
//           About Product
//         </h1>
//         <button
//           onClick={handleBackBtn}
//           className="bg-blue-900 text-white py-2 px-4 rounded-lg text-sm mt-4"
//         >
//           Go Back Home
//         </button>

//         {product && (
//           <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-start">
//             <div className="w-full lg:w-1/3 p-4 border-4 border-blue-950 rounded-lg">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full max-w-xs mx-auto"
//               />
//             </div>

//             <div className="w-full lg:w-2/3 lg:ml-6 mt-4 lg:mt-0 text-center lg:text-left">
//               <h1 className="text-xl font-bold capitalize">
//                 {product.category}
//               </h1>
//               <p className="mt-2 text-gray-700">
//                 Rating: {product.rating?.rate}
//               </p>
//               <p className="text-lg font-semibold mt-2">
//                 Price - ₹ {product.price}
//               </p>
//               <p className="mt-4 text-gray-600">{product.description}</p>

//               <div className="flex flex-col md:flex-row gap-4 mt-6">
//                 <button
//                   onClick={handleAddBtn}
//                   className="bg-yellow-400 font-bold w-full md:w-[270px] rounded-full py-2"
//                 >
//                   Add to cart
//                 </button>
//                 <button
//                   onClick={handleAddBtn}
//                   className="bg-yellow-700 font-bold w-full md:w-[270px] rounded-full py-2"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <Footer />
//         <Popup isOpen={isPopupOpen} onClose={handlePopupPageClose}>
//           <div>{product?.title} added to cart</div>
//         </Popup>
//       </div>
//     </>
//   );
// }

// export default AboutProduct;

import { useParams } from "react-router-dom";
import LogoSection from "./LogoSection";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartItem } from "../slices/cartSlice";
import Footer from "./Footer";
import Error from "./Error";
import Popup from "./Popup";
import { getProduct } from "../slices/productSlice";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

function AboutProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  async function fetchProduct(id) {
    try {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await data.json();
      setProduct(json);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    }
  }

  function handleAddBtn() {
    if (user === null) {
      navigate("/login");
      return;
    }
    setIsPopupOpen(true);
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 3000);
    dispatch(addCartItem(product));
    dispatch(getProduct(product));
  }

  function handleBackBtn() {
    navigate("/browse");
  }

  function handlePopupPageClose() {
    setIsPopupOpen(false);
  }

  if (errorMsg) return <Error error={errorMsg} />;

  return (
    <>
      <div className="container mx-auto px-4">
        <LogoSection />
        <h1 className="text-center text-blue-900 font-bold text-2xl mt-4">
          About Product
        </h1>
        <button
          onClick={handleBackBtn}
          className="bg-blue-900 text-white py-2 px-4 rounded-lg text-sm mt-4"
        >
          Go Back Home
        </button>

        {product && (
          <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="w-full lg:w-1/3 p-4 border-4 border-blue-950 rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-xs mx-auto"
              />
            </div>

            <div className="w-full lg:w-2/3 lg:ml-6 mt-4 lg:mt-0 text-center lg:text-left">
              <h1 className="text-xl font-bold capitalize">
                {product.category}
              </h1>
              <p className="mt-2 text-gray-700">
                Rating: {product.rating?.rate}
              </p>
              <p className="text-lg font-semibold mt-2">
                Price - ₹ {product.price}
              </p>
              <p className="mt-4 text-gray-600">{product.description}</p>

              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <button
                  onClick={handleAddBtn}
                  className="bg-yellow-400 font-bold w-full md:w-[270px] rounded-full py-2"
                >
                  Add to cart
                </button>
                <button
                  onClick={handleAddBtn}
                  className="bg-yellow-700 font-bold w-full md:w-[270px] rounded-full py-2"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
        <Footer />
        <Popup isOpen={isPopupOpen} onClose={handlePopupPageClose}>
          <div>{product?.title} added to cart</div>
        </Popup>
      </div>

      <div className="md:fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around py-3 border-t border-gray-300 lg:hidden">
        <div className="flex flex-col items-center">
          <AiOutlineHome
            onClick={() => navigate("/browse")}
            className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600"
          />
          <span className="text-sm">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineShoppingCart
            onClick={() => navigate("/browse/cart")}
            className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600"
          />
          <span className="text-sm">Cart</span>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineUser
            onClick={() => navigate("/")}
            className="text-3xl cursor-pointer text-gray-700 hover:text-blue-600"
          />
          <span className="text-sm">Profile</span>
        </div>
      </div>
    </>
  );
}

export default AboutProduct;
