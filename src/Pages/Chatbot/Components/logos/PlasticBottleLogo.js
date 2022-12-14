import React from "react";
import Bouteille from '../../../../img/Bouteille.webp';
import '../style/LogoTri.css';

const PlasticBottleLogo = () => {
    return (
        <div>
            <img className="logo-tri" src={Bouteille} alt="Bouteille en plastique" />
        </div>
    )
};

export default PlasticBottleLogo;
