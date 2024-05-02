import axios from "axios"
import { useEffect, useState } from "react"
import "../Style/MerchantUpdate.css"
const MerchantUpdate = () => {
    let [id,setId]=useState("")
    let [name,setname]=useState("")
    let [gst_number,setgst_number]=useState("")
    let [email,setemail]=useState("")
    let [phone,setphone]=useState("")
    let [password,setpassword]=useState("")
   

let data = {id,name,gst_number,email,phone,password}
let merchant=JSON.parse(localStorage.getItem("Merchant"))

useEffect(()=>{
    setId(merchant.id)
    setname(merchant.name)
    setgst_number(merchant.gst_number)
    setemail(merchant.email)
    setphone(merchant.phone)
    setpassword(merchant.password)
},[])

    function update(e){
        e.preventDefault();
        axios.put('http://localhost:8080/merchants',data)
        .then((res)=>{
            console.log(res);
            alert("Merchant Updated successfully")
        })
        .catch((rej)=>{
            console.log(rej);
            alert("Can't Update Merchant ")
        })
    }

    return ( 
        <div className="merchantupdate">
            <form onSubmit={update} action="">
                <label htmlFor="">Id</label>
                <input type="number"  value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Enter the Id" />
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
 
export default MerchantUpdate;