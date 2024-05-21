import Dashboard from "./Dashboard";
import Update from "./Update";

export default function AccountPage() {
  return (
    <div className="flex gap-4">
      <Dashboard></Dashboard>
      <div className="flex h-screen justify-center items-center mx-auto">
        <Update />
      </div>
    </div>
  );
}
