// import Footer from "./Footer";
// import shop_logo from "../assets/shop_logo.jpg";
// import { useDispatch, useSelector } from "react-redux";
// import { showSignUp } from "../slices/toggleSlice";
// import { useEffect, useRef, useState } from "react";
// import checkValidData from "../helpers/checkValidData";
// import { auth } from "../helpers/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { addUser } from "../slices/userSlice";

// function Login() {
//   let dispatch = useDispatch();
//   let navigate = useNavigate();
//   let showSignUpForm = useSelector((store) => store.toggle.showSignUpForm);
//   let [error, setError] = useState(null);
//   let [errors, setErrors] = useState({
//     emailError: "",
//     passwordError: "",
//     otherError: "",
//   });
//   let name = useRef(null);
//   let number = useRef(null);
//   let email = useRef(null);
//   let password = useRef(null);
//   let addressRef = useRef(null);
//   function handleSignUpForm() {
//     let errorMessage = checkValidData(
//       email.current.value,
//       password.current.value
//     );
//     setError(errorMessage);
//     if (errorMessage) return;

//     if (showSignUpForm) {
//       createUserWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           // Signed up
//           const user = userCredential.user;
//           console.log(user, "...");
//           updateProfile(user, {
//             displayName: name.current.value,
//             phoneNumber: number.current.value,
//           })
//             .then(() => {
//               const { uid, email, displayName, phoneNumber } = auth.currentUser;
//               dispatch(
//                 addUser({
//                   uid: uid,
//                   email: email,
//                   displayName: displayName,
//                   phoneNumber: phoneNumber,
//                 })
//               );
//             })
//             .catch((error) => {
//               setError(error);
//             });
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setError(errorCode + "-" + errorMessage);
//         });
//     } else {
//       signInWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           // Signed in
//           const user = userCredential.user;
//           console.log(user);
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setError(errorCode + "-" + errorMessage);
//         });
//     }
//   }

//   useEffect(() => {
//     if (error) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         emailError: error.includes("Email") ? error : "",
//         passwordError: error.includes("password") ? error : "",
//         otherError:
//           !error.includes("Email") && !error.includes("password") ? error : "",
//       }));
//     }
//   }, [error]);

//   return (
//     <>
//       <div className="w-full max-w-md mx-auto p-6">
//         <img src={shop_logo} className="mx-auto w-24" />
//         <div className="border border-gray-300 p-4 rounded-lg">
//           <h1 className="text-2xl font-bold text-center">
//             {showSignUpForm ? "Create Account" : "Sign in"}
//           </h1>
//           <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//             {showSignUpForm && (
//               <>
//                 <label className="block">
//                   Your Name
//                   <input
//                     ref={name}
//                     type="text"
//                     className="w-full border rounded-lg py-2 mt-1"
//                   />
//                 </label>
//                 <label className="block">
//                   Mobile Number
//                   <input
//                     ref={number}
//                     type="number"
//                     className="w-full border rounded-lg py-2 mt-1"
//                   />
//                 </label>
//               </>
//             )}
//             <label className="block">
//               Enter your email
//               <input
//                 ref={email}
//                 type="email"
//                 className="w-full border rounded-lg py-2 mt-1"
//               />
//             </label>
//             <p className="text-red-600 text-sm">
//               {errors.emailError ? errors.emailError : ""}
//             </p>
//             <label className="block">
//               Password
//               <input
//                 ref={password}
//                 type="password"
//                 className="w-full border rounded-lg py-2 mt-1"
//               />
//             </label>
//             <p className="text-red-600 text-sm">
//               {errors.passwordError ? errors.passwordError : ""}
//             </p>
//             {showSignUpForm && (
//               <label className="block">
//                 Address
//                 <textarea
//                   ref={addressRef}
//                   type="text"
//                   className="w-full border rounded-lg py-2 mt-1"
//                 ></textarea>
//               </label>
//             )}
//             <p className="text-red-600 text-sm">
//               {errors.otherError ? errors.otherError : ""}
//             </p>
//             <button
//               onClick={handleSignUpForm}
//               className="w-full bg-purple-600 text-white py-2 rounded-lg"
//             >
//               Continue
//             </button>
//             <p className="text-center text-sm">
//               By continuing, you agree to ProductCart privacy notice and
//               conditions of use.
//             </p>
//           </form>
//         </div>
//         <button
//           onClick={() => dispatch(showSignUp())}
//           className="w-full border border-gray-300 rounded-lg py-2 mt-4"
//         >
//           {showSignUpForm
//             ? "Already Registered? Sign in"
//             : "Create your ProductCart account"}
//         </button>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Login;

import Footer from "./Footer";
import shop_logo from "../assets/shop_logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { showSignUp } from "../slices/toggleSlice";
import { useState, useEffect } from "react";
import checkValidData from "../helpers/checkValidData";
import { auth } from "../helpers/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../slices/userSlice";

function Login() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let showSignUpForm = useSelector((store) => store.toggle.showSignUpForm);

  // State for form inputs
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    otherError: "",
  });

  async function handleSignUpForm() {
    let errorMessage = checkValidData(email, password);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    try {
      if (showSignUpForm) {
        // Signup Flow
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, {
          displayName: name,
          phoneNumber: number,
        });

        dispatch(
          addUser({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: name,
            phoneNumber: number,
          })
        );

        navigate("/"); // Redirect user after signup
      } else {
        // Login Flow
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userCredential.user);
        navigate("/"); // Redirect user after login
      }
    } catch (error) {
      setError(error.code + " - " + error.message);
    }
  }

  useEffect(() => {
    if (!error) return;
    setErrors({
      emailError: error.includes("Email") ? error : "",
      passwordError: error.includes("password") ? error : "",
      otherError:
        !error.includes("Email") && !error.includes("password") ? error : "",
    });
  }, [error]);

  return (
    <>
      <div className="w-full max-w-md mx-auto p-6">
        <img src={shop_logo} className="mx-auto w-24" alt="Shop Logo" />
        <div className="border border-gray-300 p-4 rounded-lg">
          <h1 className="text-2xl font-bold text-center">
            {showSignUpForm ? "Create Account" : "Sign in"}
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {showSignUpForm && (
              <>
                <label className="block">
                  Your Name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg py-2 mt-1"
                  />
                </label>
                <label className="block">
                  Mobile Number
                  <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="w-full border rounded-lg py-2 mt-1"
                  />
                </label>
              </>
            )}
            <label className="block">
              Enter your email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg py-2 mt-1"
              />
            </label>
            <p className="text-red-600 text-sm">{errors.emailError}</p>

            <label className="block">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg py-2 mt-1"
              />
            </label>
            <p className="text-red-600 text-sm">{errors.passwordError}</p>

            {showSignUpForm && (
              <label className="block">
                Address
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border rounded-lg py-2 mt-1"
                ></textarea>
              </label>
            )}
            <p className="text-red-600 text-sm">{errors.otherError}</p>

            <button
              onClick={handleSignUpForm}
              className="w-full bg-purple-600 text-white py-2 rounded-lg"
            >
              Continue
            </button>
            <p className="text-center text-sm">
              By continuing, you agree to ProductCart privacy notice and
              conditions of use.
            </p>
          </form>
        </div>

        <button
          onClick={() => dispatch(showSignUp())}
          className="w-full border border-gray-300 rounded-lg py-2 mt-4"
        >
          {showSignUpForm
            ? "Already Registered? Sign in"
            : "Create your ProductCart account"}
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Login;
