import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admitcard from "./pages/Admitcart";
import Answerkey from "./pages/Answerkey";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <h1 className="head">TNUSRB</h1>
      <h1 style={{textAlign:"center"}}>TamilNadu Uniformed Services Recruiment Borard</h1>
      <div>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Admitcard />} />
            <Route path="/Answerkey" element={<Answerkey />} />
            <Route path="/Result" element={<Result />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
