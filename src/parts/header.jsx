import React from "react";

import Mulher from "../assets/images/mulher.png";

const Header = () => {
    return (
        <header className="top-header" id="home">
            <section className="limit-width">
                <div className="texts">
                    <h4>
                        FATURE MUITO COM A MELHOR CONCESSIONARIA DE SEMINOVOS DO
                        BRASIL
                    </h4>
                    <p>
                        Um portal pensado exclusivamente em quem deseja crescer
                        junto com a Lions Seminovos
                    </p>
                </div>
                <div className="girl">
                    <img
                        src={Mulher}
                        alt="Mulher representativa do cabecalho da página"
                        draggable="false"
                    />
                </div>
            </section>
        </header>
    );
};

export default Header;
