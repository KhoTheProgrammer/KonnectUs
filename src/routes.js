import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ReviewRating from "./components/RatingAndReviews/ReviewRating";
import Messages from "./components/Messages/Messages";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/Alt/ProductsPage";
import Team from "./components/Team/Team";
import AccountPage from "./components/AccountManagement/AccountPage";
import Product from "./components/product listing/Product";
import AboutUs from "./components/AboutUs/AboutUs"
import EditPost from "./components/product listing/EditPost";

// Variable to store routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/RateAndReview/ReviewRating",
    element: <ReviewRating />,
  },
  {
    path: "/Messages",
    element: <Messages></Messages>,
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/HomePage",
    element: <HomePage></HomePage>
  },
  {
    path: "ProductsPage",
    element: <ProductsPage></ProductsPage>
  },
  {
    path:"/Team",
    element: <Team></Team>
  },
  {
    path: "/AccountManagement/AccountPage",
    element: <AccountPage />
  },
  {
    path: "/product listing/Product",
    element: <Product />
  },
  {
    path: "/AboutUs/AboutUs",
    element: <AboutUs />
  },
  {
    path: "/product listing/EditPost",
    element: <EditPost />
  }
]);

export default router;
