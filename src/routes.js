import { createBrowserRouter } from "react-router-dom";
import ReviewsPage from "./components/RatingAndReviews/ReviewsPage";
import Messages from "./components/Messages/Messages";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/product listing/ProductsPage";
import Team from "./components/Team/Team";
import AccountPage from "./components/AccountManagement/AccountPage";
import Product from "./components/product listing/Product";
import AboutUs from "./components/AboutUs/AboutUs";
import SignUp from "./components/SignUp";
import ContactUs from "./components/ContactUs/ContactUs";
import Admin from "./components/AccountManagement/Admin"
import EditPost from "./components/product listing/EditPost";
import Chats from "./components/Messages/Chats";
import AccountReports from "./components/AccountReporting/AccountReports";

// Variable to store routes
export const router = createBrowserRouter([
  {
    path: "/HomePage",
    element: <HomePage></HomePage>,
  },
  {
    path: "/RatingAndReviews/ReviewsPage",
    element: <ReviewsPage />,
  },
  {
    path: "/Messages/Messages",
    element: <Messages></Messages>,
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/product listing/ProductsPage",
    element: <ProductsPage></ProductsPage>
  },
  {
    path: "/Team",
    element: <Team></Team>,
  },
  {
    path: "/AccountManagement/AccountPage",
    element: <AccountPage />,
  },
  {
    path: "/product listing/Product",
    element: <Product />,
  },
  {
    path: "/AboutUs/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/SignUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/ContactUs",
    element: <ContactUs></ContactUs>
  },
  {
    path:"/Admin",
    element: <Admin></Admin>
  },
  {
    path: "/product listing/EditPost",
    element: <EditPost />
  },
  {
    path: "/Messages/Chats",
    element: <Chats />
  },
  {
    path: "/AccountReporting/AccountReports",
    element: <AccountReports />
  }
]);

export default router;
