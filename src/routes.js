import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ReviewRating from "./components/RatingAndReviews/rateAndReview";
import Messages from "./components/Messages/Messages";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/Alt/ProductsPage";
import Team from "./components/Team/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/rateAndReview",
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
  }
]);

export default router;
