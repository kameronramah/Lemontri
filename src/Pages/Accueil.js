import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase";
import lemontri from '../img/ballons.webp';
import citronBallon from '../img/logo.svg'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Devis from "./Devis";


const Accueil = () => {
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

    if(isConnected === false) {
        home = 
        <div class="margins">
            <div class="titleAccueil">
                <h1>Bienvenue</h1>
                <p>Apprends à mieux trier avec les bons "zestes" du tri</p>
            </div>
            <img id="citronAccueil" src="{citronBallon}"></img>
           
            <img class="logoLemonTri" src ={lemontri} alt="Lemontri" />
            <p>
                Avec Lemon Tri, il devient possible de trier tout au long de la journée, quel que soit l’endroit où l’on se trouve.
                Découvrez nos solutions et triez sans modération !
            </p>
            <div>
                <button class="btn" onclick={() => {navigate('/Devis')}}>CONTACTER LEMONTRI </button>
                <button class="btn" onclick={() => navigate('')}>ALLER SUR LE SITE</button>
                
            </div>
            <h2>Vous avez dèja un compte ?</h2>
            <button onclick={() => navigate('/sign-in')}>CONNECTER</button>
        </div>
    }
    else {
       home =
        <div>
            <h1>Bienvenue Capucine</h1>
            <p>Apprends à mieux trier avec les bons “zestes” du tri</p>
            <h2>Ton établissement</h2>
            <img src ={lemontri} alt="Lemontri" />
            <p> Avec Lemon Tri, il devient possible de trier tout au long de la journée, quel que soit l’endroit où l’on se trouve.</p>
            <p>  Découvrez nos solutions et triez sans modération ! </p>
        </div>

    }

    return (
        <div>
             {home}
        </div>
    )
};

export default Accueil;