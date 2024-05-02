import axios from "axios";
import { useState } from "react";
import "../Style/MerchantSignUp.css"
function MerchantSignUp() {
    let [name,setname]=useState("")
    let [gst_number,setgst_number]=useState("")
    let [email,setemail]=useState("")
    let [phone,setphone]=useState("")
    let [password,setpassword]=useState("")
    let data={name,gst_number,email,phone,password};

    function signup(e){
        e.preventDefault();
        axios.post('http://localhost:8080/merchants',data)
        .then((res)=>{
            console.log(res);
            alert("Merchant Added successfully")
        })
        .catch((rej)=>{
            console.log(rej);
            alert("Can't Add Merchant ")
        })
    }

   
    return (
        <div className="merchantsignup">
            <form onSubmit={signup} action="">
                <label htmlFor="">Name</label>
                <input type="text"  value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter the Name" />
                <label htmlFor="">Gst_Number</label>
                <input type="text"  value={gst_number} onChange={(e)=>{setgst_number(e.target.value)}} placeholder="Enter the Gst" />
                <label htmlFor="">Email</label>
                <input type="email"  value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter the Email" />
                <label htmlFor="">Phone</label>
                <input type="tel"  value={phone}  onChange={(e)=>{setphone(e.target.value)}} placeholder="Enter the Phone" />
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter the Password" />
                <button className="btn btn-warning" >Submit</button>
            </form>
        </div>
    );
}
   
export default MerchantSignUp;