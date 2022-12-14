import React from "react";
import Ampoule from '../../../../img/Ampoule.webp';
import '../style/LogoTri.css';

const GlassAmpulLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Ampoule} alt="Néons et ampoules" />
        </div>
    )
};

export default GlassAmpulLogo;