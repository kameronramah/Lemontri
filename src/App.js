import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase/firebase";
import './App.css';
import Home from './Pages/Home';
import SignIn from "./Pages/Sign-in";
import SignUp from "./Pages/Sign-up";
import Devis from './Pages/Devis';
import Navbar from './Pages/Navbar';
import Lesaviezvous from './Pages/Lesaviezvous';
import Cours from './Pages/Cours';
import Profil from './Pages/Profil';
import Accueil from './Pages/Accueil';
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
          {}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/devis"  element={<Devis/>} />
            {/* <Route path="/lesaviezvous" element={<Lesaviezvous/>} /> */}
            {/* <Route path="/cours" element={<Cours/>} /> */}
            {/* <Route path="/profil" element={ <Profil/>} />  */}
            <Route path="/accueil" element={<Accueil/>} />
          </Routes>
      </Router>
  );
}

export default App;
