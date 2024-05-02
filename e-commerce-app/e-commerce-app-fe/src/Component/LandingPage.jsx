import { Link } from "react-router-dom";
import "../Style/LandingPage.css"
const LandingPage = () => {
  return (
    <div className="landingpage">
      
      <div className="user">
      
      <Link to="/merchant"><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/merchant-3-911063.png" alt="" /><br />Merchant</Link>
      </div>
      <div className="merchant">
      
      <Link to="/user"><img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" /><br />User</Link>
      </div>
    </div>
  );
};

export default LandingPage;
