import React, {useEffect, useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import {auth, db} from "../../firebase/firebase";


const CompanyCode = () => {
    const [companyCode, setCompanyCode] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.currentUser !== null) {
            //Redirection vers la page d'accueil
        }
    });

    const checkCompanyCode = async (event, companyCode) => {
        event.preventDefault();
        const q = query(collection(db, "companies"), where("code", "==", companyCode));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) {
            navigate('/sign-up', {
                state: {
                    companyCode
                }
            })
        }
        else {
            console.log('pas de company avec ce code');
        }
    }

    return (
        <div>
            <form onSubmit={e => checkCompanyCode(e, companyCode)}>
                <label>
                    Code entreprise:
                    <input type="text" value={companyCode} onChange={e => setCompanyCode(e.target.value)} />
                </label>
                <input type="submit" value="Continuer" />
            </form>
            <button onClick={e => navigate("/")}>Devenir partenaire Lemontri</button>
            <span onClick={e => navigate("/")}>Revenir à l'accueil</span>
        </div>
    )
};

export default CompanyCode;