import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Newarticle from "./pages/Newarticle";
import Settings from "./pages/Settings";
import Update from "./pages/Update";
import "./style.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="App"><Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Newarticle" element={<Newarticle />} />
            <Route path="/Update/:id" element={<Update />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
