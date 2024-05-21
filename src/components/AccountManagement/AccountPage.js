import Delete from "./Delete";
import {useState} from "react";
import Dashboard from "./Dashboard"

export default function AccountPage() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <div>
      <div className="flex gap-4 justify-between text-white ">
        <Dashboard></Dashboard>
        <div className=" w-1/2">
          <Delete password ={password} setPassword={setPassword} newPassword={newPassword} setNewPassword={setNewPassword}/>
        </div>
        <div></div>
      </div>
    </div>
  );
}
