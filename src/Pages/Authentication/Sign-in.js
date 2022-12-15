import React, {useEffect, useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import {useNavigate} from "react-router-dom";
import groupeEco from "../../img/Group.webp";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null) {
            //Redirection vers la page d'accueil
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
                    navigate('/');
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div>
            <div className="container w-100 mx-auto">
                <button className="boutonRetour btn circle text-start"></button>
                <img className="img-fluid img-thumbnai w-80 mt-5" src={groupeEco}  alt="test"></img>
                <div className="d-grid gap-4 col-10 mx-auto mt-5">
                    <form onSubmit={e => login(e, email, password)}>
                        <div className="text-start mx-5">
                            <label className="form-label">
                            Email:
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
                            <span onClick={e => navigate("/")}>Revenir à l'accueil</span>   
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
};

export default SignIn;