
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@pages/Home";
import Page from "@pages/index";


const Routes = createBrowserRouter([
    {
        path: "",
        element: <Page />,
        children: [
            {
                path: "",
                element: <Navigate to="/home" replace />,
            },
            {
                path: "home",
                element: <Home />
            }
        ],
    },
]);

export default Routes;
