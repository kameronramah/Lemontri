import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {auth, db} from "../firebase/firebase";
import lemontri from '../img/lemontri.png';
import citronBallon from '../img/ballons.webp'
import { collection, getDocs, query, where} from "firebase/firestore";


const Accueil = () => {
    const [user, setUser] = useState(null);
    const [company, setCompany] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null && auth.currentUser.emailVerified !== false) {
            getUserInfos();
        }
    }, [auth.currentUser])

    useEffect(() => {
        getCompanyInfos();
    }, [user])

    const getCompanyInfos = async () => {
        let q = query(collection(db,'companies'), where('code', '==', user.code));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                setCompany(doc.data());
            })
        }
    }

    const getUserInfos = async () => {
        let q = query(collection(db,'users'), where('email', '==', auth.currentUser.email));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            })
        }
    }

    return (
        <>
            {user === null && company === null &&
                <div className="margins">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="titleAccueil">
                            <h1>Bienvenue</h1>
                            <p>Apprends à mieux trier avec les bons "zestes" du tri</p>
                            <div id='logoAccueil'>
                                <img className="logoLemonTri" src ={lemontri} alt="Lemontri" />
                            </div>
                        </div>
                        <img id="citronAccueil" src={citronBallon}></img>
                    </div>

                    <div className="flex-col space-bet mt-5">
                        <div className="center">
                            <p className="text-align-c">
                                Avec Lemon Tri, il devient possible de trier tout au long de la journée, quel que soit l’endroit où l’on se trouve.
                                Découvrez nos solutions et triez sans modération !
                            </p>
                            <div className="flex-col space-bet mt-3">
                                <button className="btn btn-primary" onClick={() => {navigate('/Devis')}}>CONTACTER LEMONTRI </button>
                                <button className="btn btn-warning" onClick={() => navigate('https://lemontri.fr')}>ALLER SUR LE SITE</button>
                            </div>
                        </div>

                        <div className="flex-col center mt-5">
                            <h2>Vous avez déjà un compte ?</h2>
                            <button className="btn btn-warning" onClick={() => navigate('/sign-in')}>CONNECTER</button>
                        </div>
                    </div>
                </div>
            }
            {user !== null && company !== null &&
                <div className="margins flex-col">
                    <div className="flex-row">
                        <div className="flex-col titleAccueil">
                            <div>
                                <h1 onClick={() => auth.signOut()} className="m-b-0">Bienvenue<br/>{user.name}</h1>
                            </div>
                            <p>Apprends à mieux trier avec les bons "zestes" du tri</p>
                        </div>
                        <Link to={'/profil'}>
                            <div className={'profil-circle'}></div>
                        </Link>
                    </div>
                    <h2>Ton établissement : <br/>{company.name}</h2>
                    <div id='logoAccueil'>
                        <img className="logoLemonTri" src ={lemontri} alt="Lemontri" />
                    </div>
                    <p className="text-align-c"> Avec Lemon Tri, il devient possible de trier tout au long de la journée, quel que soit l’endroit où l’on se trouve.</p>
                    <p className="text-align-c">  Découvrez nos solutions et triez sans modération ! </p>
                </div>
            }
        </>
    )
};

export default Accueil;