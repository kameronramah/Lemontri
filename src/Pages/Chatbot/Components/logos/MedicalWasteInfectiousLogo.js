import React from "react";
import DechetInfectieux from '../../../../img/DechetsInfectieux.webp';
import '../style/LogoTri.css';

const MedicalWasteInfectiousLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={DechetInfectieux} alt="DechetInfectieux" />
        </div>
    )
};

export default MedicalWasteInfectiousLogo;