import { useEffect, useState } from "react";
import axios from "axios";
import "../Style/UpdateUser.css"
const UpdateUser = () => {
    let [id, setid] = useState("")
    let [name, setname] = useState("");
    let [age, setage] = useState("");
    let [gender, setgender] = useState("");
    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let [phone, setphone] = useState("");
    let data = { id, name, age, gender, email, password, phone }
    let user = JSON.parse(localStorage.getItem("User"))
    
    useEffect(() => {
        setid(user.id)
        setname(user.name)
        setemail(user.email)
        setage(user.age)
        setgender(user.gender)
        setphone(user.phone)
        setpassword(user.password)

    }, [])

    let update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8080/users', data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((rej) => {
                console.log(rej);
            })
    }

    return (
        <div className="updateuser">
            <form action="" onSubmit={update}>
                <label htmlFor="">Id:</label>
                <input type="text" placeholder="Enter the name" value={id} onChange={(e) => { setid(e.target.value) }} />
                <label htmlFor="">Name:</label>
                <input type="text" placeholder="Enter the name" value={name} onChange={(e) => { setname(e.target.value) }} />
                <label htmlFor="">Age:</label>
                <input type="text" placeholder="Enter the age" value={age} onChange={(e) => { setage(e.target.value) }} />
                <label htmlFor="">Gender:</label>
                <input type="text" placeholder="Enter the gender" value={gender} onChange={(e) => { setgender(e.target.value) }} />
                <label htmlFor="">Email:</label>
                <input type="text" placeholder="Enter the email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                <label htmlFor="">Password:</label>
                <input type="text" placeholder="Enter the password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                <label htmlFor="">Phone:</label>
                <input type="text" placeholder="Enter the phone" value={phone} onChange={(e) => { setphone(e.target.value) }} />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
}

export default UpdateUser;