import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {FaChevronLeft} from "react-icons/fa";

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
            <div className="d-flex justify-content-left align-items-baseline mt-3" onClick={e => navigate("/")}>
                <div className="d-flex justify-content-center align-items-center backButton hoverCursor"><FaChevronLeft /></div>
                <p className="retour hoverCursor">Retour</p>
            </div>
            <Link to={'/'}>Revenir à l'accueil</Link>
        </div>
    )
}

export default EmailVerification;