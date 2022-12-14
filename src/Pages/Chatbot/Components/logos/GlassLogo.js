import React from "react";
import Verre from '../../../../img/Verre.webp';
import '../style/LogoTri.css';

const GlassLogo = () => {
    return (
        <div>
            <img className="logo-tri" src={Verre} alt="Verre" />
        </div>
    )
};

export default GlassLogo;