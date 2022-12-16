import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {FaChevronLeft} from "react-icons/fa";
import { Link } from 'react-router-dom';

const EmailVerification = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null && auth.currentUser.emailVerified !== false) {
            //Redirection vers la page d'accueil
            navigate('/accueil');
        }
    });

    return (
        <div>
            <p>Vérifier email</p>
            <div class="d-flex justify-content-left align-items-baseline mt-3" onClick={e => navigate("/")}>
                <div class="d-flex justify-content-center align-items-center backButton hoverCursor"><FaChevronLeft /></div>
                <p class="retour hoverCursor">Retour</p>
            </div> 
            
            <Link to={'/'}>Revenir à l'accueil</Link>

            
        </div>
    )
}

export default EmailVerification;