// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import appStore from "./slices/appStore";
// import { Provider } from "react-redux";
// import Browse from "./components/Browse";
// import AboutProduct from "./components/AboutProduct";
// import Cart from "./components/Cart";
// import Error from "./components/Error";
// import Products from "./components/Products";
// import Parent from "./components/Parent";
// import Child1 from "./components/Child1";
// import { useRouteError } from "react-router-dom";
// import SuccessPage from "./components/SuccessPage";
// import CheckoutPage from "./components/CheckoutPage";
// function App() {
//   let appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/products/:id",
//       element: <AboutProduct />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/browse",
//       element: <Browse />,
//     },
//     {
//       path: "/browse/cart",
//       element: <Cart />,
//     },

//     {
//       path: "/success",
//       element: <SuccessPage />,
//     },
//     {
//       path: "/browse/checkout",
//       element: <CheckoutPage />,
//     },
//     {
//       path: "*",
//       element: <Error />,
//     },

//     // {
//     //     path:"/parent",
//     //     element:<Parent/>,
//     // },
//     // {
//     //     path:'parent/child1/:id',
//     //     element:<Child1/>
//     // }
//   ]);

//   return (
//     <Provider store={appStore}>
//       <RouterProvider router={appRouter} />
//     </Provider>
//   );
// }
// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./slices/appStore";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Browse from "./components/Browse";
import AboutProduct from "./components/AboutProduct";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Products from "./components/Products";
import Parent from "./components/Parent";
import Child1 from "./components/Child1";
import SuccessPage from "./components/SuccessPage";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/:id",
      element: <AboutProduct />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "browse/products/:id",
      element: <AboutProduct />,
    },
    {
      path: "/browse/cart",
      element: (
        // <ProtectedRoute>
        <Cart />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/success",
      element: <SuccessPage />,
    },
    {
      path: "/browse/checkout",
      element: <CheckoutPage />,
    },
    {
      path: "/parent",
      element: <Parent />,
    },
    {
      path: "/parent/child1/:id",
      element: <Child1 />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
