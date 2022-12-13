import React, {useState} from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const createUser = (event, email, password, name, lastname) => {
        
        createUserWithEmailAndPassword(auth, email, password)
        .then( async (userRecord) => {
            await setDoc(doc(db, 'users', userRecord.user.uid), {
                name: name,
                lastname: lastname
            });
            navigate("/");
        })
        .catch((error) => {
            console.log('Error creating new user:', error);
        });
        event.preventDefault();
    }

    return (
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
            <input type="submit" value="S'inscrire" />
        </form>
    )
};

export default SignUp;