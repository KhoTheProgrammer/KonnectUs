import SideBar from "./SideBar"
import Users from "./Users"
export default function Admin(){
    return <div className=" flex w-full">
        <SideBar></SideBar>
        <Users></Users>
    </div>
}