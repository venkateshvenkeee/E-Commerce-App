import axios from "axios";
import { useEffect, useState } from "react";
import "../Style/ViewProduct.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
const ViewProduct = () => {
    let [data, setdata] = useState([])
    let navigate=useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then((res) => {
                setdata(res.data.body)
                console.log(res);
            })
            .catch((rej) => {
                console.log(rej);
            })
    }, [])
    
    let searchBybrand=(brand)=>{
        axios.get(`http://localhost:8080/products/find-by-brand/${brand}`)
        .then((res) => {
            console.log(res.data)
            setdata(res.data.body)
        })
        .catch((rej) => {
            console.log(rej);
        })
    }
    
    let searchBycategory = (category) => {
        axios.get(`http://localhost:8080/products/find-by-category/${category}`)
            .then((res) => {
                console.log(res.data)
                setdata(res.data.body)
            })
            .catch((rej) => {
                console.log(rej);
            })
    }

    let readData = (id) =>{
        navigate(`/userhomepage/readdata/${id}`)
      }
    return (
        <div className="disp">
            {
                data.map((x) => {
                    return (
                        <div className="search">
                        <div className="brand">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Search
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item  onClick={()=>{searchBybrand(x.brand)}}>By Brand</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>{searchBycategory(x.category)}}>By Category</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="productview">
                            <div className="image">
                                <span id="category">{x.category}</span>
                                <img src={x.image_url} alt="" />
                            </div>
                            <div className="desc">
                                <h4 id="name" onClick={()=>{readData(x.id)}}>{x.name} || {x.brand}</h4>
                                <span id="cost"><sup><b>₹</b></sup> {x.cost}</span>
                               <br />
                               <span id="desc">{x.description}</span>
                            </div>
                            <div className="cost">
                                <h2>{x.cost}</h2>

                            </div>

                        </div>
                        </div>
                    )
                }
                )}
        </div>
    );
}

export default ViewProduct;