import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Style/UpdateProduct.css"
const UpdateProduct = () => {
    let [id,setid]=useState("")
    let [name, setname] = useState("");
    let [brand, setbrand] = useState("");
    let [category, setcategory] = useState("");
    let [description, setdescription] = useState("");
    let [cost, setcost] = useState("");
    let [image_url, setimage_url] = useState("");
    let data = {id, name, brand, category, description, cost, image_url };

    let param=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${param.id}`)
        .then((res)=>{
            console.log(res.data.body);
            setid(res.data.body.id)
            setname(res.data.body.name)
            setbrand(res.data.body.brand)
            setcategory(res.data.body.category)
            setdescription(res.data.body.description)
            setcost(res.data.body.cost)
            setimage_url(res.data.body.image_url)
            
        })
        .catch((rej)=>{
            console.log(rej);
            alert("Something went wrong")
        })
    },[])

    let update=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/products`,data)
        .then((res)=>{
            console.log(res);
            alert("Product Updated successfully")
        })
        .catch((rej)=>{
            console.log(rej);
            alert("Something went wrong")
        })
    }

    return (
        <div className="updateproduct">
            <form onSubmit={update} action="">
                <label htmlFor="">Name:</label>
                <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} required placeholder="Enter the Name" />
                <label htmlFor="">Brand:</label>
                <input type="text" value={brand} onChange={(e) => { setbrand(e.target.value) }} required placeholder="Enter the Brand" />
                <label htmlFor="">Category:</label>
                <input type="text" value={category} onChange={(e) => { setcategory(e.target.value) }} required placeholder="Enter the Category" />
                <label htmlFor="">Description:</label>
                <input type="text" value={description} onChange={(e) => { setdescription(e.target.value) }} required placeholder="Enter the Description" />
                <label htmlFor="">Cost:</label>
                <input type="number" value={cost} onChange={(e) => { setcost(e.target.value) }} required placeholder="Enter the Cost" />
                <label htmlFor="">Image_URL:</label>
                <input type="text" value={image_url} onChange={(e) => { setimage_url(e.target.value) }} required placeholder="Enter the Image_URL" />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
}

export default UpdateProduct;