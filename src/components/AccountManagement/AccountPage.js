import Dashboard from "./Dashboard";
import Update from "./Update";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

export default function AccountPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex gap-4">
        <Dashboard></Dashboard>
        <div className="w-3/4 flex justify-center mx-auto">
          <Update />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
