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
import Cours from './Pages/Cours/Cours';
import Profil from './Pages/Profil/Profil';
import Quizzes from './Pages/Game/Quizzes';
import QuizzHome from './Pages/Game/QuizzHome';
import Accueil from './Pages/Accueil';
import LemontriChatBot from "./Pages/Chatbot/LemontriChatBot";
import NavbarLayout from "./Components/NavbarLayout";
import CoursUnitaire from "./Pages/Cours/CoursUnitaire";

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
            <Route path="/quizzes" element={<Quizzes/>} />

            {/* <Route path="/lesaviezvous" element={<Lesaviezvous/>} /> */}
            {/* <Route path="/profil" element={ <Profil/>} />  */}
            <Route element={<NavbarLayout/>}>
              <Route path="/accueil" element={<Accueil/>} />
              <Route path="/chatbot" element={<LemontriChatBot/>}/>
              <Route path="/cours" element={<Cours/>}/>
              <Route path="/cours/:id" element={<CoursUnitaire/>}/>
              <Route path="/profil" element={<Profil/>} />
              <Route path="/quizzhome" element={<QuizzHome/>}/>
            </Route>
          </Routes>
      </Router>
  );
}

export default App;
