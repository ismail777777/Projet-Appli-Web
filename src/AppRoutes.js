import React, { Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './SignUp';
import Principale from './principale';
import Login from './login';
import About from './About';
import Products from './products';
import Panier from './panier';
import history from "./history";

function AppRoutes() {
    return (
        <Router history = {history}>
            <Routes>
                <Route path="/principale" element={<Principale />}/>
                <Route path="/SignUp" element={<SignUp />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/AboutUs" element={<About />}/>
                <Route path="/Products" element={<Products />}/>
                <Route path="/MyCart" element={<Panier />}/>
                <Route path="/" element={<Principale />}/>

            </Routes>
        </Router>
    )
}
export default AppRoutes;
