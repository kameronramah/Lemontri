import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase/firebase";
import './App.css';
import Home from './Pages/Home';
import SignIn from "./Pages/Authentication/Sign-in";
import SignUp from "./Pages/Authentication/Sign-up";
import CompanyCode from "./Pages/Authentication/CompanyCode";
import EmailVerification from "./Pages/Authentication/EmailVerification";
import Devis from './Pages/Devis';
import Lesaviezvous from './Pages/Lesaviezvous';
import Cours from './Pages/Cours';
import Profil from './Pages/Profil';
import Accueil from './Pages/Accueil';
import LemontriChatBot from "./Pages/Chatbot/LemontriChatBot";
import NavbarLayout from "./Components/NavbarLayout";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [deconnexion, setDeconnexion] = useState(null);

  auth.onAuthStateChanged((user) => {
    if(user) {
      setDeconnexion(<li> <Link onClick={e => auth.signOut()}>Déconnexion</Link> </li>)
    }
    else {
      setDeconnexion(null);
    }
  })

  return (
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/company-code" element={<CompanyCode/>} />
            <Route path="/email-verification" element={<EmailVerification/>} />
            <Route path="/devis"  element={<Devis/>} />
            {/* <Route path="/lesaviezvous" element={<Lesaviezvous/>} /> */}
            {/* <Route path="/cours" element={<Cours/>} /> */}
            {/* <Route path="/profil" element={ <Profil/>} />  */}
            <Route element={<NavbarLayout/>}>
              <Route path="/accueil" element={<Accueil/>} />
              <Route path="/chatbot" element={<LemontriChatBot/>}/>
            </Route>
          </Routes>
      </Router>
  );
}

export default App;
