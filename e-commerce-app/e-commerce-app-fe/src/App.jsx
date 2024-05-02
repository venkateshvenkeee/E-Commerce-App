import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./Component/LandingPage";
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import UserLogin from "./Component/UserLogin";
import MerchantLogin from "./Component/MerchantLogin";
import MerchantSignUp from "./Component/MerchantSignUp";
import MerchantHomePage from "./Component/MerchantHomePage";
import UserHomePage from "./Component/UserHomePage";
import Error from "./Component/Error";
import Protect from "./Component/Protect";
import UserSignUp from "./Component/UserSignUp";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<Error/>}/>
          <Route path="/user" element={<UserLogin/>}/>
          <Route path="/merchant" element={<MerchantLogin/>}/>
          <Route path="/merchantsignup" element={<MerchantSignUp/>}/>
          <Route path="/merchanthomepage/*" element={<Protect Child={MerchantHomePage}/>}/>
          <Route path="/userhomepage/*" element={<UserHomePage/>}/>
          <Route path="/usersignup" element={<UserSignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
