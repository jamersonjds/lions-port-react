import React from "react";

import Loja from "../assets/images/loja.jpg";

const Sobre = () => {
    return (
        <section className="about" id="sobre">
            <section className="limit-width grid-about">
                <div className="shop-lions">
                    <img src={Loja} alt="Imagem de uma das lojas da lions" />
                </div>
                <div className="text-about">
                    <h5>Um pouco sobre a Lions</h5>
                    <p>
                        A história da Lions Seminovos começou em 2014, quando
                        Tailon Ribeiro, após deixar o serviço militar, abriu sua
                        primeira loja no quintal da casa de sua mãe, em Belford
                        Roxo, no Rio de Janeiro. Determinado a criar a maior
                        revendedora de seminovos do Brasil, ele expandiu o
                        negócio rapidamente. A primeira filial foi aberta em
                        Mesquita, seguida por filiais em Nova Iguaçu, Duque de
                        Caxias e Niterói, com estruturas maiores e foco em
                        atendimento de qualidade. Em 2020, a Lions abriu sua
                        quarta filial no maior polo de vendas de carros da
                        América Latina, e em 2021, inaugurou seu Centro de
                        Operações para preparar os veículos. Em 2022, expandiram
                        para Barra Mansa e estabeleceram a matriz na Avenida
                        Brasil, no Rio. Em 2023, abriram sua primeira loja fora
                        do estado, em São Paulo, e em 2024, inauguraram a
                        segunda unidade em Osasco, continuando seu plano de
                        expansão e excelência no atendimento.
                    </p>
                </div>
            </section>
        </section>
    );
};

export default Sobre;
