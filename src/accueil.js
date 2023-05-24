import React from "react";
import './accueil.css';

function Accueil (props) {
    function handleClick() {
        
        props.changeForm("principale");
    }

    function handleClick5() {
        props.changeForm("MyCart");
    }

    function handleClick3() {
        props.changeForm("products");
    }

    function handleClick4() {
        props.changeForm("About");
    }

    function handleClick2(){
        props.changeForm("MyAccount");
    }
    return (
        <div className="accueil">
            <header className="accueil-header">
            <p>
            Electronic Corner
            </p>
            <nav>
            <ul>
                <li><a href="#" onClick={handleClick3}>Our products</a></li>
                <li><a href="#" onClick={handleClick5}>Cart</a></li>
                <li><a href="#" onClick={handleClick2}>Your account</a></li>
                <li><a href="#" onClick={handleClick}>Sign out</a></li>
                <li><a href="#" onClick={handleClick4}>AboutUs</a></li>
            </ul>
            </nav>
        </header>
        </div>
    );
}
export default Accueil;
