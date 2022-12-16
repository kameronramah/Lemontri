import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { auth } from "../../firebase/firebase";

const EmailVerification = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null) {
            //Redirection vers la page d'accueil
            navigate('/accueil');
        }
        if(auth.currentUser.emailVerified !== false) {
            navigate("/");
        }
    });

    return (
        <div>
            <p>Vérifier email</p>
            <button onClick={e => navigate("/")}>Revenir à l'accueil</button>
        </div>
    )
}

export default EmailVerification;