import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase";
import lemontri from '../img/lemontri.png';
import citronBallon from '../img/ballons.webp'
import {BrowserRouter as Router, Link} from 'react-router-dom';


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
        <div class="margins flex-col">
            <div class="flex-row">
                <div class="flex-col titleAccueil">
                    <h1>Bienvenue</h1>
                    <p>Apprends à mieux trier avec les bons "zestes" du tri</p>
                    <div id='logoAccueil'>
                        <img class="logoLemonTri" src ={lemontri} alt="Lemontri" />
                    </div>
                </div>
                <img id="citronAccueil" src={citronBallon}></img>
            </div>
            <div class="flex-col space-bet">
                <div class="flex-col center">
                    <p class="text-align-c">
                        Avec Lemon Tri, il devient possible de trier tout au long de la journée, quel que soit l’endroit où l’on se trouve.
                        Découvrez nos solutions et triez sans modération !
                    </p>
                    <div class="flex-col space-bet">
                        <button class="btn btn-primary" onclick={() => {navigate('/Devis')}}>CONTACTER LEMONTRI </button>
                        {/* site external  */}
                        {/* <button class="btn btn-warning" onclick={() => navigate('https://lemontri.fr')}>ALLER SUR LE SITE</button>  */}
                        <Link  class="btn btn-warning" to="https://lemontri.fr">
                        ALLER SUR LE SITE 
                        </Link>
                    </div>
                </div>
                
                <div class="flex-col center">
                    <h2>Vous avez déjà un compte ?</h2>
                    <button class="btn btn-warning" onclick={() => navigate('/sign-in')}>CONNECTER</button>
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