import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/" style={linkStyle}>Admitcart</Link></li>
        <li style={liStyle}><Link to="/AnswerKey" style={linkStyle}>Answerkey</Link></li>
        <li style={liStyle}><Link to="/Result" style={linkStyle}>Result</Link></li>
      </ul>
    </nav>
  );
};

const navStyle = {
  background: "#333",
  padding: "10px",
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-around",
  padding: 0,
};

const liStyle = {
  margin: "0 10px",
  backgroundColor: 'white'
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
};

export default Navbar;
