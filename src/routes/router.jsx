import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Coffees from "../pages/Coffees/Coffees";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/", 
                element: <Home></Home>
            },
            {
                path: "coffees", 
                element: <Coffees></Coffees>
            },
            {
                path: "dashboard", 
                element: <Coffees></Coffees>
            }
        ]
    }
]);

export default router;
