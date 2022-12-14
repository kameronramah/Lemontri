import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase";
import lemontri from './lemontri.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Devis from "./Devis";


const Home = () => {
    const [isConnected, setIsConnected] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null) {
            setIsConnected(true);
            //Redirection vers la page d'accueil
        }
        else {
            setIsConnected(false);
        }
    })

    let home;

    if(isConnected) {
        home = 
        <Router>
            <div>
                <h1>Bienvenue</h1>
                <p>Apprends à mieux trier avec les bons "zestes" du tri</p>
                <img src ={lemontri} Alt="Lemontri" />
                <p>
                    Avec Lemon Tri, il devient possible de trier tout au long de la journée, quel que soit l’endroit où l’on se trouve.
                    Découvrez nos solutions et triez sans modération !
                </p>
                <div>
                    <Link to="/Devis">
                    <button onclick="activateLasers()"  >
                    CONTACTER LEMONTRI
                    </button>
                    </Link>
                    <Link to="https://lemontri.fr/">
                    <button onclick="activateLasers()"  >
                    ALLER SUR LE SITE 
                    </button>
                    </Link>
                </div>
                <h2>Vous avez dèja un compte ?</h2>
                <Link to="https://lemontri.fr/">
                    <button onclick="activateLasers()"  >
                        SE CONNECTER  
                    </button>
                </Link>
            </div>
        </Router>
    }
    else {

        <Router>
            <div>
               <h1>Bienvenue Capucine</h1>
                <p>Apprends à mieux trier avec  les bons “zestes” du tri</p>
                <h2>Ton établissement</h2>
                

            </div>
        </Router>

    }

    return (
        <div>
            {home}
            <button onClick={e => navigate('/sign-in')}>Se connecter</button>
            <button onClick={e => navigate('/accueil')}>Accéder sans compte</button>
        </div>
    )
};

export default Home;