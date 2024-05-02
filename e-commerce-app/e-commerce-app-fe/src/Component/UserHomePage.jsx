import { Route, Routes } from "react-router-dom";
import UserNavBar from "./UserNavBar";
import ViewProduct from "./ViewProduct";
import UpdateUser from "./UpdateUser";
import UserLocation from "./UserLocation";
import ReadContent from "./ReadContent";
const UserHomePage = () => {
    
    return (
        <div className="userhomepage">
           <UserNavBar/>
           <Routes>
            <Route path="/viewproduct" element={<ViewProduct/>}/>
            <Route path="/updateuser" element={<UpdateUser/>}/>
            <Route path="/addaddress" element={<UserLocation/>}/>
            <Route path="/readdata/:id" element={<ReadContent/>}/>
           </Routes>
        </div>
    );
}

export default UserHomePage;