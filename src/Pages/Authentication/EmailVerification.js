import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {FaChevronLeft} from "react-icons/fa";

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
            <div class="d-flex justify-content-left align-items-baseline mt-3" onClick={e => navigate("/")}>
                <div class="d-flex justify-content-center align-items-center backButton hoverCursor"><FaChevronLeft /></div>
                <p class="retour hoverCursor">Retour</p>
            </div> 
        </div>
    )
}

export default EmailVerification;