// import { FiPhoneCall } from "react-icons/fi";
// import { PiLineVerticalBold } from "react-icons/pi";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { onAuthStateChanged } from "firebase/auth";
// import { addUser, removeUser } from "../slices/userSlice";
// import { signOut } from "firebase/auth";
// import { auth } from "../helpers/firebase";
// import React from "react";
// import Login from "./Login";
// import app from "../helpers/firebase";
// function Header() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   let user = useSelector((store) => store.user.user);
//   console.log(user, "....user");
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const { uid, displayName, email } = user;
//         dispatch(
//           addUser({
//             uid: uid,
//             email: email,
//             displayName: displayName,
//           })
//         );
//         navigate("/browse");
//       } else {
//         // User is signed out
//         dispatch(removeUser());
//         navigate("/");
//       }
//     });
//   }, []);
//   function showLoginForm() {
//     navigate("/login");
//   }
//   function handleSignout() {
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//         dispatch(removeUser());
//       })
//       .catch((error) => {
//         // An error happened.
//         navigate("/error");
//       });
//   }

//   return (
//     <div className="hidden lg:flex bg-blue-900 text-white text-sm p-2 justify-between px-4 font-bold cursor-pointer">
//       <p className="flex items-baseline">
//         <span className="mr-2">
//           <FiPhoneCall />
//         </span>
//         912121131313
//       </p>
//       <p className="flex items-baseline">
//         Get 50% off on selected items
//         <span>
//           <PiLineVerticalBold />
//         </span>{" "}
//         Shop Now
//       </p>
//       {user ? (
//         <button onClick={handleSignout} className=" text-white">
//           Sign Out
//         </button>
//       ) : (
//         <p onClick={showLoginForm} className="flex items-baseline">
//           Login
//           <span>
//             <PiLineVerticalBold />
//           </span>
//           Sign Up
//         </p>
//       )}
//     </div>
//   );
// }
// export default Header;

import { FiPhoneCall } from "react-icons/fi";
import { PiLineVerticalBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../slices/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../helpers/firebase";
import React from "react";
import Popup from "./Popup";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let user = useSelector((store) => store.user.user);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLogin, setIsLogin] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin("Login");
        setIsPopupOpen(true);
        setTimeout(() => {
          setIsPopupOpen(false);
        }, 2000);
        const { uid, displayName, email } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        setIsLogin("Logout");
        setIsPopupOpen(true);
        setTimeout(() => {
          setIsPopupOpen(false);
        }, 2000);
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  function showLoginForm() {
    navigate("/login");
  }

  function handleSignout() {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  }
  function handlePopupPageClose() {
    setIsPopupOpen(false);
  }
  return (
    <div className="hidden lg:flex bg-blue-900 text-white text-sm p-2 justify-between px-4 font-bold cursor-pointer">
      <p className="flex items-baseline">
        <span className="mr-2">
          <FiPhoneCall />
        </span>
        912121131313
      </p>
      <p className="flex items-baseline">
        Get 50% off on selected items
        <span>
          <PiLineVerticalBold />
        </span>
        Shop Now
      </p>
      {user ? (
        <button onClick={handleSignout} className=" text-white">
          Sign Out
        </button>
      ) : (
        <p onClick={showLoginForm} className="flex items-baseline">
          Login
          <span>
            <PiLineVerticalBold />
          </span>
          Sign Up
        </p>
      )}
      <Popup isOpen={isPopupOpen} onClose={handlePopupPageClose}>
        <div>
          <h1 className="text-purple-800">{isLogin} successfully.</h1>
        </div>
      </Popup>
    </div>
  );
}

export default Header;
