import {
  createBrowserRouter
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllFood from "../Pages/All Food/AllFood";
import Gallery from "../Pages/Gallery/Gallery";

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