import Dashboard from "./Dashboard";
import Update from "./Update";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

export default function AccountPage() {
  return (
    <div className="h-full w-full">
      <NavBar></NavBar>
      <div className="flex">
        <Dashboard></Dashboard>
        <Update />
      </div>
      <Footer></Footer>
    </div>
  );
}
