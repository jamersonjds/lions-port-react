import React from "react";

import Team from "../assets/images/team.png";

const Apresentacao = () => {
    return (
        <section className="team" id="equipe">
            <section className="limit-width grid-team">
                <div className="text-team">
                    <h4>
                        FAÇA PARTE DA NOSSA <span>EQUIPE</span>.
                    </h4>
                    <ul className="list-team">
                        <li>
                            <p>Diversas estratégias de vendas</p>
                        </li>
                        <li>
                            <p>Possuímos a melhor comissão do mercado</p>
                        </li>
                        <li>
                            <p>Diversos benefícios</p>
                        </li>
                        <li>
                            <p>Ótimas oportunidades de crescimento</p>
                        </li>
                    </ul>
                </div>
                <div className="img-team">
                    <img src={Team} alt="Foto da equipe" />
                </div>
            </section>
        </section>
    );
};

export default Apresentacao;
