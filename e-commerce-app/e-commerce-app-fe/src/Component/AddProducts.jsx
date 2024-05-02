import { useState } from "react";
import axios from "axios";
import "../Style/AddProducts.css";

const AddProducts = () => {
let[name,setname]=useState("");
let[brand,setbrand]=useState("");
let[category,setcategory]=useState("");
let [description,setdescription]=useState("");
let[cost,setcost]=useState("");
let[image_url,setimage_url]=useState("");
let data={name,brand,category,description,cost,image_url};
let admin=JSON.parse(localStorage.getItem("Merchant"));


    let addData=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/products/${admin.id}`,data)
        .then((res)=>{
            console.log(res);
            alert("Product Added successfully")
        })
        .catch((rej)=>{
            console.log(rej);
            alert("Something went wrong")
        })
    }

    return ( 
        <div className="addproducts">
            <form onSubmit={addData} action="">
                <label htmlFor="">Name:</label>
                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} required placeholder="Enter the Name" />
                <label htmlFor="">Brand:</label>
                <input type="text"  value={brand} onChange={(e)=>{setbrand(e.target.value)}} required placeholder="Enter the Brand" />
                <label htmlFor="">Category:</label>
                <input type="text"  value={category} onChange={(e)=>{setcategory(e.target.value)}} required placeholder="Enter the Category" />
                <label htmlFor="">Description:</label>
                <input type="text"  value={description} onChange={(e)=>{setdescription(e.target.value)}} required placeholder="Enter the Description" />
                <label htmlFor="">Cost:</label>
                <input type="number"  value={cost} onChange={(e)=>{setcost(e.target.value)}} required placeholder="Enter the Cost" />
                <label htmlFor="">Image_URL:</label>
                <input type="text"  value={image_url} onChange={(e)=>{setimage_url(e.target.value)}} required placeholder="Enter the Image_URL" />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
     );
}
 
export default AddProducts;