import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase/firebase";
import './App.css';
import Home from './Pages/Home';
import SignIn from "./Pages/Sign-in";
import SignUp from "./Pages/Sign-up";
import Devis from './Pages/Devis';
import Navbar from './Pages/Navbar';
const App = () => {
  const [deconnexion, setDeconnexion] = useState(null);

  auth.onAuthStateChanged((user) => {
    if(user) {
      setDeconnexion(null);
    }
    else {
      setDeconnexion(<li> <Link to="/" onClick={e => auth.signOut()}>Déconnexion</Link> </li>)
    }
  })

  return (
      <Router>
          <Navbar />
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/sign-in">Connexion</Link>
              </li>
              <li>
                <Link to="/sign-up">Inscription</Link>
              </li>
              <li>
              <Link to="/devis">Devis</Link>
              </li>
              
              {deconnexion}
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/devis"  element={<Devis/>} />
          </Routes>

      </Router>
  );
}

export default App;
