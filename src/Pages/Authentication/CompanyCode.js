import React, {useEffect, useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import {auth, db} from "../../firebase/firebase";
import {FaChevronLeft} from "react-icons/fa";


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
            <div class="d-flex justify-content-left align-items-baseline mt-3" onClick={e => navigate("/sign-in")}>
                <div class="d-flex justify-content-center align-items-center backButton hoverCursor"><FaChevronLeft /></div>
                <p class="retour hoverCursor">Retour</p>
            </div> 
            <form onSubmit={e => checkCompanyCode(e, companyCode)}>
                <label>
                    Code entreprise:
                    <input type="text" value={companyCode} onChange={e => setCompanyCode(e.target.value)} />
                </label>
                <input type="submit" value="Continuer" />
            </form>
            <button onClick={e => navigate("/devis")}>Devenir partenaire Lemontri</button>
        </div>
    )
};

export default CompanyCode;