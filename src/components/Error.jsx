import React from "react";
import { useNavigate } from "react-router-dom";
function Error({ error }) {
  let navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] text-center flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl text-center text-blue-950">
        page not found
      </h1>
      <p>{error}</p>
      <button
        onClick={() => navigate("/browse")}
        className="text-center bg-yellow-900 text-white px-4 py-1 font-bold my-4 rounded"
      >
        Home
      </button>
    </div>
  );
}
export default Error;
