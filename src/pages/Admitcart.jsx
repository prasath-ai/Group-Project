import React from "react";

const Admitcart = () => {
  const handleclick=()=>{
    alert("Login Successfully")
  }
  return (
    <div className="Form">
      <h1>Welcome to the Admitcart Page</h1>
      <p>This is the main page of the app.</p>
      <p>This the Admitcard Download page</p>
      <form className="container">
        <label>Reg No:</label>
        <input type="name"placeholder="Enter the Number"></input><br></br>
        <label>Userpassword:</label>
        <input type="password"placeholder="Enter the password"></input><br></br>
      <button onClick={handleclick}>Login</button>
      </form>
    </div>
  );
};

export default Admitcart;
