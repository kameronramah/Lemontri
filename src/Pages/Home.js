import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null) {
            //Redirection vers la page d'accueil
        }
    })

    return (
        <div>
            <button onClick={e => navigate('/sign-in')}>Se connecter</button>
            <button onClick={e => navigate('/accueil')}>Accéder sans compte</button>
        </div>
    )
};

export default Home;