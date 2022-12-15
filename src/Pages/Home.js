import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase";
import lemontri from '../img/lemontri.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Devis from "./Devis";
import drapeau1 from "../img/drapeau-1.webp";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null) {
        }
    })


    return (
        <div>
            <div className='container'>
                <h1 className='display-2 text-center'>Les bons zestes <br/>de tri</h1>
                <img className="img-fluid img-thumbnai" src={drapeau1}  alt="test"></img>
                <div className='d-grid gap-4 col-6 mx-auto'>
                    <button className='btn btn-primary' onClick={e => navigate('/sign-in')}>Se connecter</button>
                    <button className='btn btn-warning ' onClick={e => navigate('/accueil')}>Accéder sans compte</button>
                </div>
            </div>
        </div>
    );

}


export default Home;