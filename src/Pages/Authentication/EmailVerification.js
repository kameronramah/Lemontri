import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {FaChevronLeft} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import citronTache from "../../img/avocat-checklist.webp";

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
            <Container className="w-100 mx-auto">
                <div class="d-flex justify-content-left align-items-baseline mt-3" onClick={e => navigate("/")}>
                    <div class="d-flex justify-content-center align-items-center backButton hoverCursor"><FaChevronLeft /></div>
                    <p class="retour hoverCursor">Retour</p>
                </div> 
                <div className="d-flex">
                    <img className="citronAvocat img-fluid img-thumbnai" src={citronTache}  alt="test"></img>
                    <div className="infoBulle3 text-center">
                        Un mail a été envoyé sur ton adresse mail professionelle, clique sur le lien pour valider ton compte
                    </div>
                </div>
                <div className="d-grid gap-4 col-10 mx-auto mt-5">
                    <p className="btn btn-primary">Vérifier email</p>
                    
                    <Link className="btn btn-warning" to={'/'}>Revenir à l'accueil</Link>
                </div>

            </Container>  
        </div>
    )
}

export default EmailVerification;