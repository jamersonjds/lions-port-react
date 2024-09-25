import React from "react";

import Logo from "../assets/images/logo.png";

const Associacao = () => {
    return (
        <section className="influencer">
            <section className="limit-width">
                <h5>
                    Associe-se à Lions Seminovos e acelere seus sonhos com quem
                    lidera o caminho da confiança e qualidade!
                </h5>
                <img src={Logo} alt="Logo da lions seminovos" />
            </section>
        </section>
    );
};

export default Associacao;
