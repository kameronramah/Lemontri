import React, {useEffect, useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import {auth, db} from "../../firebase/firebase";
import {Container} from 'react-bootstrap';
import citronTri from "../../img/Tri-zéro-déchet.webp";

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
            <Container className="w-100 mx-auto">  
                <div>
                    <img className="citronTri img-fluid img-thumbnai w-70" src={citronTri}  alt="test"></img>
                    <div className="infoBulle text-center">
                        Votre entreprise est partenaire LemonTri et vous souhaitez rejoindre l’aventure maZESTEueuse du tri ? 
                            <br/>Merveilleux ! Renseignez votre code entreprise pour commencer
                    </div>
                </div>        
                <div className="d-grid gap-4 col-10 mx-auto">
                    <form onSubmit={e => checkCompanyCode(e, companyCode)}>
                        <div className="text-start mx-5">
                            <label className="form-label">
                                Code entreprise:
                                <input className="champRemplir form-control" type="text" value={companyCode} onChange={e => setCompanyCode(e.target.value)} />
                            </label>
                            <div className="d-grid gap-4 col-12 mx-auto mt-3">
                                <input className="btn btn-primary" type="submit" value="Continuer" />
                                <button className="btn btn-warning" onClick={e => navigate("/")}>Devenir partenaire Lemontri</button>
                                <span onClick={e => navigate("/")}>Revenir à l'accueil</span>
                            </div>
                            
                        </div>
                    </form>
                </div>
                
            </Container>
        </div>
    )
};

export default CompanyCode;