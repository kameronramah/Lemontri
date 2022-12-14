import React from "react";
import Carton from '../../../../img/PapierCarton.webp';
import '../style/LogoTri.css';

const PaperCardboardLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Carton} alt="Papiers et cartons" />
        </div>
    )
};

export default PaperCardboardLogo;