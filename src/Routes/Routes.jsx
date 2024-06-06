import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoutes from "../Privet/PrivetRoutes";
import Contact from "../Pages/Contact/Contact";
import EstateProperty from "../Pages/EstateProperty/EstateProperty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: (
          <PrivetRoutes>
            <Contact></Contact>
          </PrivetRoutes>
        ),
      },
      {
        path: "/property",
        element: (
          <PrivetRoutes>
            <EstateProperty></EstateProperty>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

export default router;
