import {
  createBrowserRouter
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllFood from "../Pages/All Food/AllFood";
import Gallery from "../Pages/Gallery/Gallery";
import FoodDetails from "../Pages/All Food/FoodDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import FoodPurchase from "../Pages/Food Purchase/FoodPurchase";
import MyOrders from "../Pages/My Orders/MyOrders";
import AddFood from "../Pages/AddFood/AddFood";
import MyFood from "../Pages/My Food/MyFood";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: "/allfood",
        Component: AllFood
      },
      {
        path: "/menu/:id",
        Component: FoodDetails,
        loader: ({params}) => fetch(`http://localhost:3000/menu/${params.id}`)
      },
      {
        path: "purchase/:id",
        element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/menu/${params.id}`)

      },
      {
        path: '/myorders',
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>

      },
      {
        path:'/addFood',
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>

      },
      {
        path: '/myfood',
        element: <PrivateRoute><MyFood></MyFood></PrivateRoute>
      },
      {
        path: "/gallery",
        Component: Gallery
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/login",
        Component: Login
      }
    ]
  },
]);

export default router;