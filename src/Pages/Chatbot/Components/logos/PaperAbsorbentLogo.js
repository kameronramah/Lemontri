import React from "react";
import Papier from '../../../../img/PapierAbsorbant.webp';
import '../style/LogoTri.css';

const PaperAbsorbentLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Papier} alt="Papier absorbant" />
        </div>
    )
};

export default PaperAbsorbentLogo;