import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase";
import lemontri from '../img/lemontri.png';
import citronBallon from '../img/ballons.webp'
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
            <div class="d-flex flex-row justify-content-between">
                <div class="titleAccueil">
                    <h1>Bienvenue</h1>
                    <p>Apprends à mieux trier avec les bons "zestes" du tri</p>
                    <div id='logoAccueil'>
                        <img class="logoLemonTri" src ={lemontri} alt="Lemontri" />
                    </div>
                </div>
                <img id="citronAccueil" src={citronBallon}></img>
            </div>

            <div class="flex-col space-bet mt-5">
                <div class="center">
                    <p class="text-align-c">
                        Avec Lemon Tri, il devient possible de trier tout au long de la journée, quel que soit l’endroit où l’on se trouve.
                        Découvrez nos solutions et triez sans modération !
                    </p>
                    <div class="flex-col space-bet mt-3">
                        <button class="btn btn-primary" onclick={() => {navigate('/Devis')}}>CONTACTER LEMONTRI </button>
                        <button class="btn btn-warning mt-3" onclick={() => navigate('https://lemontri.fr')}>ALLER SUR LE SITE</button> 
                    </div>
                </div>
                
                <div class="flex-col center mt-5">
                    <h2>Vous avez déjà un compte ?</h2>
                    <button class="btn btn-warning" onclick={() => navigate('/sign-in')}>SE CONNECTER</button>
                </div>
            </div>
        </div>
    }
    else {
       home =
        <div class="margins flex-col">
           <div class="flex-row">
                <div class="flex-col titleAccueil">
                    <div>
                        <h1 class="m-b-0">Bienvenue<br/>Username</h1>
                    </div>
                    <p>Apprends à mieux trier avec les bons "zestes" du tri</p>
                </div>
                <img id="citronAccueil" src={citronBallon}></img>
            </div>
            <h2>Ton établissement<br/>UserCompany</h2>
            <div id='logoAccueil'>
                        <img class="logoLemonTri" src ={lemontri} alt="Lemontri" />
                    </div>
            <p class="text-align-c"> Avec Lemon Tri, il devient possible de trier tout au long de la journée, quel que soit l’endroit où l’on se trouve.</p>
            <p class="text-align-c">  Découvrez nos solutions et triez sans modération ! </p>
        </div>
    }

    return (
        <div>
             {home}
        </div>
    )
};

export default Accueil;