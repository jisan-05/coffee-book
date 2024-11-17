import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
// import Categories from "../components/Categories";
import CoffeeCards from "../components/CoffeeCards";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('../categories.json'),
            children:[
              {
                path:'/category/:category',
                element:<CoffeeCards/>
              }
            ]
            
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