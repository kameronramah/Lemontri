import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase";
import lemontri from '../img/lemontri.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Devis from "./Devis";
import {Container} from 'react-bootstrap';
import drapeau1 from "../img/drapeau-1.webp";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null && auth.currentUser.emailVerified === true) {
            navigate('/accueil');
        }
    })


    return (
        <div>
            <Container className="w-100 mx-auto">
                <h1 className='titre1 display-2 text-center mt-5'>Les bons zestes <br/>de tri</h1>
                <img className="drapeau img-fluid img-thumbnai w-100 mt-4" src={drapeau1}  alt="test"></img>
                <div className='d-grid gap-4 col-10 mx-auto mt-5'>
                    <button className='btn btn-primary' onClick={e => navigate('/sign-in')}>Se connecter</button>
                    <button className='btn btn-warning ' onClick={e => navigate('/accueil')}>Accéder sans compte</button>
                </div>
            </Container>
        </div>
    );

}


export default Home;