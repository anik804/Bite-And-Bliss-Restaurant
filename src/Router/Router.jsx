import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import AddFood from "../Pages/AddFood/AddFood";
import AllFood from "../Pages/All Food/AllFood";
import FoodDetails from "../Pages/All Food/FoodDetails";
import FoodPurchase from "../Pages/Food Purchase/FoodPurchase";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyFood from "../Pages/My Food/MyFood";
import MyOrders from "../Pages/My Orders/MyOrders";
import Register from "../Pages/Register/Register";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import PrivateRoute from "../Routes/PrivateRoute";
import { Component } from "react";
import AboutUs from "../Pages/About Us/AboutUs";
import ErrorPage from "../Pages/Error Page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allfood",
        Component: AllFood,
      },
      {
        path: "/menu/:id",
        Component: FoodDetails,
        loader: ({ params }) =>
          fetch(`https://bite-and-bliss-server-side.vercel.app/menu/${params.id}`),
      },
      {
        path: "purchase/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase></FoodPurchase>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bite-and-bliss-server-side.vercel.app/menu/${params.id}`),
      },
      {
        path: "/myorders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myfood",
        element: (
          <PrivateRoute>
            <MyFood></MyFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bite-and-bliss-server-side.vercel.app/menu/${params.id}`),
      },

      {
        path: "/gallery",
        Component: Gallery,
      },
      {
        path: "/aboutus",
        Component: AboutUs,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "*",
        Component: ErrorPage,
      }
    ],
  },
]);

export default router;
