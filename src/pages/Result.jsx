import React from "react";

const Result = () => {
  const handleclick=()=>{
    alert("Submitted Successfully")
  }
  return (
    <div>
      <h1>Our Result</h1>
      <p>We offer a variety of services. Learn more on this page.</p>
      <form className="container">
        <label>Reg No:</label>
        <input type="name"placeholder="Enter the Name"></input><br></br>
        <label>Userpassword:</label>
        <input type="password"placeholder="Enter the Number"></input><br></br>
      <button onClick={handleclick
        
      }>Submit</button>
      </form>
    </div>
  );
};

export default Result;

