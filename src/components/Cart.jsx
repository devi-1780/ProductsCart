// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import LogoSection from "./LogoSection";
// import Footer from "./Footer";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { useDispatch } from "react-redux";
// import { removeCartItem } from "../slices/cartSlice";
// function Cart() {
//   let dispatch = useDispatch();
//   let navigate = useNavigate();
//   let cartItems = useSelector((store) => store.cart.cartItems);
//   const handleRemoveItem = (item) => {
//     dispatch(removeCartItem(item));
//   };
//   return (
//     <>
//       <div className="p-4 h-screen">
//         <LogoSection />
//         <button
//           onClick={() => {
//             navigate("/browse");
//           }}
//           className="text-white bg-blue-950 rounded px-4 ml-[5%] py-1"
//         >
//           Back to products
//         </button>
//         <h1 className="text-2xl font-bold text-center mt-2">
//           <HiOutlineShoppingBag className="ml-[44%] mt-[5px] absolute" />
//           My Cart
//         </h1>
//         {cartItems.length === 0 ? (
//           <p className="text-center mt-[5%]">Your cart is empty.</p>
//         ) : (
//           <div className="flex mt-4">
//             <ul className="flex flex-col px-[5%]">
//               {cartItems.map((item) => (
//                 <li
//                   key={item.id}
//                   className="mt-2 flex justify-around w-[150vh] border border-gray-400 border-solid-[2px] rounded font-bold p-4"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-[100px] h-[100px] border border-solid border-black rounded-lg p-2 m-2"
//                   />
//                   <p className="font-bold">{item.title.slice(0, 30)}</p>
//                   <p>
//                     Price <br />₹ {item.price}
//                   </p>
//                   <p>
//                     Total <br />₹ {item.price}
//                   </p>
//                   <button
//                     onClick={() => handleRemoveItem(item)}
//                     className="bg-red-600 text-white w-[100px] h-[fit-content] mt-4 font-normal rounded"
//                   >
//                     remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="-ml-10">
//               <h1 className="capitalize font-bold">price details</h1>
//               <p className="flex justify-between">
//                 Total MRP <span>₹{}</span>
//               </p>
//               <p>
//                 Discount on MRP <span>₹0</span>
//               </p>
//               <p>
//                 Convenience Fee <span>₹45</span>
//               </p>
//               <div className="mt-32">
//                 <h1>
//                   Total Amount <span>₹</span>
//                 </h1>
//                 <button
//                   onClick={() => {
//                     navigate("/browse/checkout");
//                   }}
//                   className="bg-yellow-500 text-[12px]  py-2 font-bold text-center rounded w-[200px] mt-2"
//                 >
//                   PLACE ORDER
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Cart;

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoSection from "./LogoSection";
import Footer from "./Footer";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../slices/cartSlice";
import { useState } from "react";
function Cart() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let cartItems = useSelector((store) => store.cart.cartItems);
  let pro = useSelector((store) => store.products.product);
  let [price, setPrice] = useState(pro.price);
  let [proCount, setProCount] = useState(1);
  console.log(pro, "....product");
  const handleRemoveItem = (item) => {
    dispatch(removeCartItem({ id: item }));
  };
  let total = 0;
  if (cartItems) {
    total = cartItems.reduce((initial, item) => initial + item.price, 0);
  }

  return (
    <>
      <div className="p-4 min-h-screen">
        <LogoSection />
        <button
          onClick={() => navigate("/browse")}
          className="text-white bg-blue-950 rounded px-4 py-1 mb-4"
        >
          Back to products
        </button>
        <h1 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <HiOutlineShoppingBag className="text-3xl" /> My Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center mt-6">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <ul className="w-full sm:w-2/3">
              {cartItems.map((item, index) => (
                <li
                  key={`${item.id}-${index}`}
                  className="flex flex-col sm:flex-row justify-between items-center p-4 border border-gray-400 rounded mb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[80px] h-[80px] object-contain border border-black rounded-lg p-2"
                  />
                  <div className="flex">
                    <button
                      onClick={() => {
                        if (pro.id === item.id && price > item.price) {
                          setPrice(price - item.price);
                        }
                        if (proCount > 1) {
                          setProCount(proCount - 1);
                        }
                      }}
                      className="px-4 text-xl font-bold bg-red-600 text-white h-[30px] rounded-xl "
                    >
                      -
                    </button>
                    <p className="ml-2">{proCount}</p>
                    <button
                      onClick={() => {
                        pro.id === item.id && setPrice(price + item.price);
                        setProCount(proCount + 1);
                      }}
                      className="px-4 text-xl font-bold bg-green-600 text-white h-[30px] ml-4 rounded-xl"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-center sm:text-left sm:w-1/3">
                    {item.title.slice(0, 30)}
                  </p>
                  <p className="text-center sm:text-left">Price: ₹{price}</p>
                  <p className="text-center sm:text-left">Total: ₹{price}</p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="w-full sm:w-1/3 p-4 border border-gray-400 rounded">
              <h1 className="font-bold text-lg">Price Details</h1>
              <p className="flex justify-between py-1">
                Total MRP <span>₹{total}</span>
              </p>

              <div className="border-t border-gray-300 mt-4 pt-2">
                <button
                  onClick={() => navigate("/browse/checkout")}
                  className="bg-yellow-500 text-sm py-2 font-bold text-center rounded w-full mt-[50%]"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
