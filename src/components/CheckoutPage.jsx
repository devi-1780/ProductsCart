import shop_logo from "../assets/shop_logo.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Popup from "./Popup";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
function CheckoutPage() {
  let navigate = useNavigate();
  let user = useSelector((store) => store.user.user);
  let cartItems = useSelector((store) => store.cart.cartItems);
  let addressRef = useRef("address");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [address, setAddress] = useState(user?.address);
  const [error, setError] = useState(null);
  function handleAddressPage() {
    // console.log(isPopupOpen);
    setIsPopupOpen(true);
    setAddress(addressRef.current.value);
  }
  function handleAddressPageClose() {
    setIsPopupOpen(false);
  }
  let total = 0;
  if (cartItems) {
    total = cartItems.reduce((initial, item) => initial + item.price, 0);
  }
  function handleSuccessPage() {
    if (addressRef === null) {
      setError("Enter Address details");
    }
    if (error === null) {
      navigate("/success");
    }
  }

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between">
        <img src={shop_logo} alt="logo" className="w-24 ml-4" />
        <button
          onClick={() => navigate("/browse/cart")}
          className="text-white bg-blue-950 rounded px-4 py-2"
        >
          Back to cart
        </button>
      </div>

      <h1 className="font-bold text-2xl underline text-center my-4">
        Checkout
      </h1>

      <div className="flex flex-col lg:flex-row w-full gap-6">
        <div className="w-full lg:w-2/3 p-4 border rounded-lg shadow-md">
          <div className="mb-6">
            <h1 className="text-red-700 font-bold">1. Delivery address</h1>
            {user && <p>{user?.displayName}</p>}
            <div className="mt-2 p-3 border border-gray-100 rounded">
              {address === null ||
                (address === undefined && (
                  <p
                    onClick={handleAddressPage}
                    className="text-right cursor-pointer"
                  >
                    get details
                  </p>
                ))}
              <p>{addressRef.current.value}</p>
            </div>
          </div>
          <hr />

          <div className="my-6">
            <h1 className="text-red-700 font-bold">2. Payment method</h1>
            <select className="w-full p-3 border border-gray-300 rounded mt-2 text-gray-600">
              <option>Choose payment mode</option>
              <option value="delivery">Pay on Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Card">Card</option>
            </select>
          </div>
          <hr />

          <div className="my-6 flex justify-between">
            <h1 className="text-red-700 font-bold">
              3. Review items and delivery
            </h1>
            <div className="flex justify-around">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.id} className="flex justify-around">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[80px] h-[80px] object-contain border border-black rounded-lg p-2"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 p-4 border rounded-lg shadow-md">
          <button
            onClick={handleSuccessPage}
            className="w-full bg-yellow-500 text-center font-bold py-2 rounded my-4"
          >
            Place your order
          </button>
          <p className="text-sm text-gray-600 my-2">
            By placing your order, you agree to Productcart privacy notice and
            conditions of use.
          </p>
          <hr />
          <h1 className="font-bold my-4">Order Summary</h1>
          <p className="text-gray-600 flex justify-between my-2">
            Items: <span>{cartItems.length}</span>
          </p>
          <p className="text-gray-600 flex justify-between my-2">
            Total Amount: <span>{total}</span>
          </p>
          <p className="text-gray-600 flex justify-between my-2">
            Delivery fee: <span>{(18 / 100) * total}</span>
          </p>
          <hr />
          <p className="text-red-600 text-lg font-bold flex justify-between my-4">
            Order Total: <span>{total + (18 / 100) * total}</span>
          </p>
        </div>
        <Popup isOpen={isPopupOpen} onClose={handleAddressPageClose}>
          <label>
            Enter your Address
            <textarea
              ref={addressRef}
              type="text"
              className="w-full border border-solid border-gray-400 mt-4"
            ></textarea>
          </label>
        </Popup>
      </div>
    </div>
  );
}

export default CheckoutPage;
