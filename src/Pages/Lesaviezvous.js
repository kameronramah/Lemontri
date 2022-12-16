// import React, {useEffect, useState} from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import {useNavigate} from "react-router-dom";


// const SignIn = () => {

   

//     const login = (event, email, password) => {
   
//     }

//     return (
//         <div>
//             <h1>LE RECYCLAGE</h1>
//               <h2>DES CAPSULES</h2>
//                 <p>
//                     Un café sur deux est aujourd'hui consommé avec un système de capsules ou dosettes. Selon
//                    la marque, ces dernières peuvent être composées d’aluminium ou de plastique, et
//                    contiennent du marc de café, une matière biodégradable.
//                    En France, on estime que 500 millions de capsules sont consommées par an ! Lorsque la
//                     sule est recyclée, elle permet de réduire son bilan carbone de 20%, et économise 95% d’énergie.
//                 </p>
//                <ul>
//                 <li>6 Tonnes</li>
//                </ul>
               
           
//         </div>
//     )
// };

// export default SignIn;




import React, { useEffect, useState} from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db} from "../firebase/firebase";
import {useNavigate} from 'react-router-dom';

const Lesaviezvous = () => {
    const [lesaviez, setlesaviez] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getLesaviez((lesaviez) => {
            setlesaviez(lesaviez)
        })
    });

    const getLesaviez = async () => {
        let lesaviez = [];
        const querySnapshot = await getDocs(collection(db, "lesaviezvous"));
        querySnapshot.forEach((doc) => {
            let lesaviezvous = doc.data();
            Object.assign(lesaviezvous, {id: doc.id});
            lesaviez.push(lesaviezvous);
        });
        return lesaviez;
    }

    return (
        <>
        {lesaviez.map((lesaviez) => {
             return (
                    <p>{lesaviez.titre}</p>
                       
                        )
                    })}
        </>
    )
}

export default Lesaviezvous;