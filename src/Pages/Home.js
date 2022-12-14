import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase";
import img from "../img/drapeau-1.webp";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null) {
            //Redirection vers la page d'accueil
        }
    })

    return (
        <div>
            <div className='container'>
                <h1 className='display-2 text-center'>Les bons zestes <br/>de tri</h1>
                <img class src={img}  alt="test"></img>
                <div className='d-grid gap-4 col-6 mx-auto'>
                    <button className='btn btn-primary' onClick={e => navigate('/sign-in')}>Se connecter</button>
                    <button className='btn btn-warning ' onClick={e => navigate('/accueil')}>Accéder sans compte</button>
                </div>

            </div>
        </div>
    )
};

export default Home;