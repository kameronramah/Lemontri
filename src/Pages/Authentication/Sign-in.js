import React, {useEffect, useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import {useNavigate} from "react-router-dom";
import groupeEco from "../../img/Group.webp";
import {Container} from 'react-bootstrap';
import {FaChevronLeft} from "react-icons/fa";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null) {
            //Redirection vers la page d'accueil
            navigate('/accueil');
        }
    })

    const login = (event, email, password) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                if(auth.currentUser.emailVerified === false) {
                    console.log('Email non vérifié');
                }
                else {
                    navigate('/accueil');
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div>
            <Container className="w-100 mx-auto">
                <div class="d-flex justify-content-left align-items-baseline mt-3" onClick={e => navigate("/")}>
                    <div class="d-flex justify-content-center align-items-center backButton hoverCursor"><FaChevronLeft /></div>
                    <p class="retour hoverCursor">Retour</p>
                </div> 
                
                <img className="img-fluid img-thumbnai w-70 mt-5" src={groupeEco}  alt="test"></img>
                <div className="d-grid gap-4 col-10 mx-auto mt-5">
                    <form onSubmit={e => login(e, email, password)}>
                        <div className="text-start mx-5">
                            <label className="form-label">
                                Email professionnel:
                                <input className="champRemplir form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                             </label>
                            <label className="form-label">
                                Mot de passe:
                                <input className="champRemplir form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </label>
                        </div>
                        <div className="d-grid gap-4 col-10 mx-auto mt-5">
                            <input className="btn btn-primary" type="submit" value="Connexion" />
                            <button className="btn btn-warning" onClick={e => navigate("/company-code")}>Créer un compte </button>  
                         </div>
                    </form>
                </div>
            </Container>           
        </div>
    )
};

export default SignIn;