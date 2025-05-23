import shop_logo from "../assets/shop_logo.jpg";
import success from "../assets/success.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function SuccessPage() {
  let navigate = useNavigate();
  return (
    <div>
      <div>
        <img src={shop_logo} alt="logo" className="w-[100px] ml-10" />
      </div>
      <div className="shadow-xl text-center w-5/12 p-4 py-10 mx-auto">
        <img src={success} alt="successImage" className="w-6/12 mx-auto" />
        <h1 className="font-bold my-4">Order is placed successfully!</h1>
        <p>You will receiving a confirmation email with order details.</p>
        <button
          onClick={() => navigate("/browse")}
          className="bg-blue-950 text-white text-sm font-bold py-2 px-4 w-10/12 rounded my-4"
        >
          Go back to Home page
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default SuccessPage;
