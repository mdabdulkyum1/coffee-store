import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/", 
                element: <h1>Home</h1>
            }
        ]
    }
]);

export default router;
