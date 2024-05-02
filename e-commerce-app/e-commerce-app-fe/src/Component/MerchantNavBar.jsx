import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../Style/MerchantNavBar.css";
const MerchantNavBar = () => {
    return (
        <nav id="navbar">
            <div className="logo">
                <h1>Shoppers<span>Cart</span></h1>
            </div>
            <div className="option">
                <Link to="/merchanthomepage/productview">View Product </Link>
                <Link to="/merchanthomepage/addproduct">Add Product </Link>
            </div>
            <div className="account">
                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                       <AccountCircleIcon/> Account
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/merchanthomepage/updatemerchant">Edit Account</Dropdown.Item>
                        <Dropdown.Item href="/">LogOut</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    );
}

export default MerchantNavBar;