import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
            path:'/coffees',
            element:<Coffees/>
        },
        {
            path:'/dashboard',
            element:<Dashboard/>
        }
      ]
    },
  ]);

  export default router;