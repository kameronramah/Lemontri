import React, {useEffect, useState} from "react";
import {createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useLocation, useNavigate} from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const companyCode = location.state === null ? null : location.state.companyCode;

    useEffect(() => {
        if(auth.currentUser !== null) {
            //Redirection vers la page d'accueil
        }
        if(companyCode === null) {
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
                companyCode: companyCode
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

            <form onSubmit={e => createUser(e, email, password, name, lastname)}>
                <label>
                    Nom:
                    <input type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
                </label>
                <label>
                    Prénom:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Mot de passe:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Finaliser le compte" />
            </form>
            <button onClick={e => navigate("/")}>Revenir à l'accueil</button>
        </div>



    )
};

export default SignUp;