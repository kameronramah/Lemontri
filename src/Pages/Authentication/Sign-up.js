import React, {useEffect, useState} from "react";
import {createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useLocation, useNavigate} from "react-router-dom";
import {Container} from 'react-bootstrap';
import citronJoie from "../../img/Happy_Zesty.webp";


const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const companyCode = location.state === null ? null : location.state.companyCode;

    useEffect(() => {
        if(auth.currentUser !== null && auth.currentUser.emailVerified !== false) {
            //Redirection vers la page d'accueil
            navigate('/accueil');
        }
        else if(companyCode === null) {
            navigate('/company-code');
        }
    })

    const createUser = (event, email, password, name, lastname) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then( async (userRecord) => {
            await setDoc(doc(db, 'users', userRecord.user.uid), {
                name: name,
                lastname: lastname,
                email: email,
                companyCode: companyCode,
                rank: 1
            });
            await sendEmailVerification(userRecord.user);
            await auth.signOut();
            navigate("/email-verification");
        })
        .catch((error) => {
            console.log('Error creating new user:', error);
        });
    }

    return (
        <div>
            <Container className="w-100 mx-auto">  
                <div className="d-flex">
                    <img className="citronJoie img-fluid img-thumbnai" src={citronJoie}  alt="Citron Joyeux"></img>
                    <div className="infoBulle1 text-center">
                        Vous avez réussi la première étape. Il ne reste plus qu’à renseigner les informations utiles pour vous connaître.
                        <br/>Nos citrons sont pressés de vous connaître ! 
                    </div>
                </div>
                <div className="d-grid gap-4 col-10 mx-auto">
                    <form onSubmit={e => createUser(e, email, password, name, lastname)}>
                        <div className="text-start mx-5">
                            <label className="form-label">
                                Nom :
                                <input className="champRemplir form-control" type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
                            </label>
                            <label className="form-label">
                                Prénom :
                                <input className="champRemplir form-control" type="text" value={name} onChange={e => setName(e.target.value)} />
                            </label>
                            <label className="form-label">
                                Email :
                                <input className="champRemplir form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </label>
                            <label className="form-label">
                                Mot de passe :
                                <input className="champRemplir form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </label>
                        </div>
                        <div className="d-grid gap-4 col-10 mx-auto mt-3">
                            <input className="btn btn-primary" type="submit" value="Finaliser le compte" />
                            <button className="btn btn-warning" onClick={e => navigate("/")}>Revenir à l'accueil</button>
                        </div>
                        
                    </form>
                    
                </div>
                
            </Container>
        </div>



    )
};

export default SignUp;