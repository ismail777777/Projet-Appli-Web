import logo from './logo.svg';
import SignUp from './SignUp';
import Principale from './principale';
import Login from './login';
import About from './About';
import Products from './products';
import Accueil from './accueil';
import Panier from './panier';
import { useState } from "react";
import './App.css';
import Routes from './AppRoutes';

function App() {
  const [currentForm, setCurrentForm] = useState("principale");
  function changeForm(Form) {
    setCurrentForm(Form);
  }
  return (
    /*<div className="App">
      {currentForm == "principale" ? <Principale changeForm={changeForm} /> : currentForm == "SignUp" ? <SignUp changeForm={changeForm} /> : currentForm == "About" ? <About changeForm={changeForm} /> : currentForm == "Login" ? <Login changeForm={changeForm} /> :  currentForm == "products" ? <Products changeForm={changeForm} /> :  currentForm == "accueil" ? <Accueil changeForm={changeForm} /> : <Panier changeFor={changeForm} /> }
    </div>*/
    <div className="App">
      <Routes />
    </div>

  );
}

export default App;
