import React, {useState} from "react";

const BasicForm = () => {
    // const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    const [account, setAccount] = useState({userName:"", email:""});
    const [error, setError] = useState({userName:"", email:"", error:""});
    const handleChange = (e) => {
        // setUserName(e.target.value);
        setAccount({...account, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // gui du lieu nhung khong load lai trang
        // console.log(e);
        // setUserName(e.target[0].value);
        console.log(account);
        
    }
    // if (userName != "admin") {
        return (
            <div className="container">
                <form onSubmit={handleSubmit}>
                    {account.userName} - {account.email}
                    <br></br>
                    <input type="text" name='userName' placeholder="Enter your name?" value={account.userName || ""} onChange={handleChange}/>
                    <br></br>
                    <input type="email" name="email" placeholder="Enter your email?" value={account.email || ""} onChange={handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    // } else {
    //     return <div>{userName}</div>
    // }
    
}

export default BasicForm
