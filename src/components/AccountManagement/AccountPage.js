import Update from "./Update";
import Change from "./Change";
import Delete from "./Delete";
import Dashboard from "./Dashboard";

export default function AccountPage() {
  return (
    <div>
        <Dashboard></Dashboard>
      <div className="grid grid-cols-3 mx-8 gap-8 text-white ">
        <Update></Update>
        <Change></Change>
        <Delete></Delete>
      </div>
    </div>
  );
}
