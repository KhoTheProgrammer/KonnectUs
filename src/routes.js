import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

export const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomePage></HomePage>
        }
    ]
)