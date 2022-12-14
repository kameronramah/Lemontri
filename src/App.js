import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase/firebase";
import './App.css';
import Home from './Pages/Home';
import SignIn from "./Pages/Authentication/Sign-in";
import SignUp from "./Pages/Authentication/Sign-up";
import CompanyCode from "./Pages/Authentication/CompanyCode";
import EmailVerification from "./Pages/Authentication/EmailVerification";
import LemontriChatBot from "./Pages/Chatbot/LemontriChatBot";

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
          <nav>
            <ul>
              {deconnexion}
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/company-code" element={<CompanyCode/>} />
            <Route path="/email-verification" element={<EmailVerification/>} />
            <Route path="chatbot" element={<LemontriChatBot/>}/>
          </Routes>
      </Router>
  );
}

export default App;
