import React from "react";
import Livre from '../../../../img/livre.webp';
import '../style/LogoTri.css';

const PaperBookLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Livre} alt="Livre" />
        </div>
    )
};

export default PaperBookLogo;