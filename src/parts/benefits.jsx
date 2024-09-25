import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import MedalBronze from "../assets/images/medalha_bronze.png";
import MedalPrata from "../assets/images/medalha_prata.png";
import MedalOuro from "../assets/images/medalha_ouro.png";

const Beneficios = () => {
    useEffect(() => {
        ScrollReveal().reveal("#benefits1", {
            origin: "right",
            distance: "100%",
            viewFactor: 0,
            mobile: false,
        });
        ScrollReveal().reveal("#benefits2", {
            delay: 300,
            origin: "right",
            distance: "100%",
            viewFactor: 0,
            mobile: false,
        });
        ScrollReveal().reveal("#benefits3", {
            delay: 400,
            origin: "right",
            distance: "100%",
            viewFactor: 0,
            mobile: false,
        });
        ScrollReveal().reveal("#benefits4", {
            delay: 500,
            origin: "right",
            distance: "100%",
            viewFactor: 0,
            mobile: false,
        });
        ScrollReveal().reveal("#bkg1", { viewFactor: 0, scale: 0 });
        ScrollReveal().reveal("#bkg2", { viewFactor: 0, scale: 0, delay: 300 });
        ScrollReveal().reveal("#bkg3", { viewFactor: 0, scale: 0, delay: 500 });
    }, []);

    return (
        <section className="benefits" id="beneficios">
            <section className="limit-width">
                <h3>
                    BENEFICIOS <span>LIONS</span>
                </h3>
                <div className="container-grid">
                    <ul className="medals">
                        <li>
                            <span className="bkg" id="bkg1"></span>
                            <img
                                src={MedalBronze}
                                alt="Medalha de bronze"
                                draggable="false"
                            />
                        </li>
                        <li>
                            <span className="bkg" id="bkg2"></span>
                            <img
                                src={MedalPrata}
                                alt="Medalha de bronze"
                                draggable="false"
                            />
                        </li>
                        <li>
                            <span className="bkg" id="bkg3"></span>
                            <img
                                src={MedalOuro}
                                alt="Medalha de bronze"
                                draggable="false"
                            />
                        </li>
                    </ul>
                    <ul className="text-benefits">
                        <li id="benefits1">
                            <span className="material-symbols-outlined">
                                check
                            </span>
                            <div className="text">
                                <p>
                                    <strong>Variedade de veículos:</strong>A
                                    Lions Seminovos oferece uma ampla seleção de
                                    carros de diferentes marcas e modelos,
                                    atendendo às diversas necessidades dos
                                    clientes.
                                </p>
                            </div>
                        </li>
                        <li id="benefits2">
                            <span className="material-symbols-outlined">
                                check
                            </span>
                            <div className="text">
                                <p>
                                    <strong>
                                        Estrutura e atendimento de qualidade:
                                    </strong>
                                    Com várias filiais bem equipadas e uma
                                    equipe treinada, a Lions foca em oferecer um
                                    atendimento de excelência em todas as suas
                                    lojas.
                                </p>
                            </div>
                        </li>
                        <li id="benefits3">
                            <span className="material-symbols-outlined">
                                check
                            </span>
                            <div className="text">
                                <p>
                                    <strong>
                                        Crescimento e credibilidade:
                                    </strong>
                                    Com uma trajetória de sucesso desde 2014, a
                                    Lions Seminovos consolidou sua posição como
                                    líder de vendas no estado do Rio de Janeiro
                                    e continua expandindo para outras regiões do
                                    Brasil.
                                </p>
                            </div>
                        </li>
                        <li id="benefits4">
                            <span className="material-symbols-outlined">
                                check
                            </span>
                            <div className="text">
                                <p>
                                    <strong>
                                        Centro de Operações dedicado:
                                    </strong>
                                    A empresa conta com um centro especializado
                                    para vistoria e preparação dos veículos,
                                    garantindo que os carros sejam inspecionados
                                    e entregues em ótimas condições.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
};

export default Beneficios;
