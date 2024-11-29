import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Coffees from "../pages/Coffees/Coffees";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import Dashboard from "../pages/Dashboard/Dashboard";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";

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
                element: <Dashboard></Dashboard>
            },
            {
                path: "addCoffee",
                element: <AddCoffee></AddCoffee>
            },
            {
                path: "/coffee/details/:id",
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({params})=> fetch(`https://coffee-server-nine-eta.vercel.app/coffees/${params.id}`)
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }

]);

export default router;
