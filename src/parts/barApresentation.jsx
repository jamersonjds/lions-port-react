import React from "react";

const BarraApresentacao = () => {
    return (
        <section className="apresentation">
            <section className="limit-width ">
                <ul className="grid-apresentation">
                    <li>
                        <span className="material-symbols-outlined">
                            payments
                        </span>
                        <p>Ganhe uma renda extra</p>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            beach_access
                        </span>
                        <p>Trabalhe onde quiser</p>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            attach_money
                        </span>
                        <p>Altas margens de lucro</p>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            trending_up
                        </span>
                        <p>Oportunidade de crescimento</p>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default BarraApresentacao;
