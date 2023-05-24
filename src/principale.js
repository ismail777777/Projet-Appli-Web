import React from "react";
import './principale.css';
import history from "./history";

function principale () {
    /*function handleClick() {
        
        props.changeForm("SignUp");
    }

    function handleClick2() {
        props.changeForm("Login");
    }

    function handleClick3() {
        props.changeForm("products");
    }

    function handleClick4() {
        props.changeForm("About");
    }*/
    return (
        /*<div className="principale">
            <header className="principale-header">
            <p>
            Electronic Corner
            </p>
            <nav>
             <ul>
                <li><a href="#" onClick={handleClick3}>Our products</a></li>
                <li><a href="#" onClick={handleClick2}>LogIn</a></li>
                <li><a href="#" onClick={handleClick}>SignUp</a></li>
                <li><a href="#" onClick={handleClick4}>AboutUs</a></li>
            </ul>
            </nav>
        </header>
        </div>*/
        <div className="principale">
            <header className="principale-header">
            <p>
            Electronic Corner
            </p>
            <nav>
             <ul>
                <li><button type="button" onClick={()=> history.push('/Products')}>Our products</button></li>
                <li><button type="button" onClick={()=> history.push('/login')}>LogIn</button></li>
                <li><button type="button" onClick={()=> history.push('/SignUp')}>SignUp</button></li>
                <li><button type="button" onClick={()=> history.push('/AboutUs')}>AboutUs</button></li>
            </ul>
            </nav>
            </header>
        </div>
    );
}
export default principale;
