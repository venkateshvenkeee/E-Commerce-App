import axios from "axios";
import { useState } from "react";
import "../Style/UserSignUp.css"
import { useNavigate } from "react-router-dom";
const UserSignUp = () => {
    let [name, setname] = useState("");
    let [age, setage] = useState("");
    let [gender, setgender] = useState("");
    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let [phone, setphone] = useState("");

    let data = { name, age, gender, email, password, phone }
    let navigate=useNavigate()
   let submit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8080/users', data)
    .then((res) => {
        alert("User Added Successfully")
        console.log(res);
        navigate("/user")
    })
    .catch((rej) => {
        console.log(rej);
        alert("Something Went Wrong")
    })
   }

    return (
       <div className="usersignup">
        <form action="" onSubmit={submit}>
         <label htmlFor="">Name:</label>
            <input type="text" placeholder="Enter the name" value={name} onChange={(e)=>{setname(e.target.value)}} />
            <label htmlFor="">Age:</label>
            <input type="text" placeholder="Enter the age" value={age} onChange={(e)=>{setage(e.target.value)}} />
            <label htmlFor="">Gender:</label>
            <input type="text" placeholder="Enter the gender" value={gender} onChange={(e)=>{setgender(e.target.value)}} />
            <label htmlFor="">Email:</label>
            <input type="text" placeholder="Enter the email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <label htmlFor="">Password:</label>
            <input type="text" placeholder="Enter the password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
            <label htmlFor="">Phone:</label>
            <input type="text" placeholder="Enter the phone" value={phone} onChange={(e)=>{setphone(e.target.value)}} />
            <button className="btn btn-success">Submit</button>
       </form>
       </div>
    );
}

export default UserSignUp;