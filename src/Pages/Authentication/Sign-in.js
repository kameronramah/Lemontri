import React, {useEffect, useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import {useNavigate} from "react-router-dom";


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
            <form onSubmit={e => login(e, email, password)}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Mot de passe:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Connexion" />
            </form>
            <button onClick={e => navigate("/company-code")}>Créer un compte </button>
            <span onClick={e => navigate("/")}>Revenir à l'accueil</span>
        </div>
    )
};

export default SignIn;