import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/Alt/ProductsPage";
import Team from "./components/Team/Team";

// Variable to store routes
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
