import Form from 'react-bootstrap/Form';
import "../Style/UserLogin.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const UserLogin = () => {
    let [email,setemail]=useState("");
    let [password,setpassword]=useState("");
    let navigate=useNavigate();


let signin=(e)=>{
e.preventDefault();
axios.post(`http://localhost:8080/users/verify-by-email?email=${email}&password=${password}`)
.then((res)=>{
    alert("Login Successfull");
    console.log(res.data);
    localStorage.setItem("User",JSON.stringify(res.data.body));
    navigate("/userhomepage");
})
.catch((rej)=>{
    alert("Invalid Credentials");
    console.log(rej);
})
}

let signup=()=>{
    navigate("/usersignup")
}

    return ( 
        <div className="userlogin">
            <Form>
                <h2>User Login Page</h2>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <button className='btn btn-success mx-5' onClick={signin}>Sign In</button>
                    <button className='btn btn-danger mx-5' onClick={signup}>Sign Up</button>
                </Form.Group>
            </Form>
        </div>
     );
}
 
export default UserLogin;