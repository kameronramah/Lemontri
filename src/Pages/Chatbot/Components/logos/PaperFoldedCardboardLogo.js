import React from "react";
import Carton from '../../../../img/CartonPlie.webp';
import '../style/LogoTri.css';

const PaperFolderCardboardLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Carton} alt="Cartons pliés" />
        </div>
    )
};

export default PaperFolderCardboardLogo;