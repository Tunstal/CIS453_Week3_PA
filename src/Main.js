import React from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home/Home";
import Peace from "./Peace/Peace";
import Origin from "./Origin/Origin";
import "./index.css";

function Main() {
    return (
        <HashRouter>
        <div>
            <h1>Week 2 Performance Assessment</h1>
            <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/peace">Peace Symbol</NavLink></li>
                <li><NavLink to="/origin">Origin</NavLink></li>
            </ul>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/peace" element={<Peace />} />
                    <Route path="/origin" element={<Origin />} />
                </Routes>
            </div>
        </div>
        </HashRouter>
    )
}

export default Main;