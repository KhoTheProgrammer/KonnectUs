import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import HomeAfterLogin from "src/components/HomeAfterLogin/HomePageLogin.js"
const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
            path:"src\components\HomeAfterLogin\HomePageLogin",
            element:<HomeAfterLogin></HomeAfterLogin>
        }
    ]
)