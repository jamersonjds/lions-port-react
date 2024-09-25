import React, { useRef, useState } from "react";

import Logo from "../assets/images/logo.png";

const TopMenu = () => {
    // Gerenciando o estado do menu aberto ou fechado
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null); // Ref para o elemento de navegação

    // Função para abrir o menu
    const openMenu = () => {
        setMenuOpen(true);
    };

    // Função para fechar o menu
    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Função para obter a distância do topo
    const getDistance = (element) => {
        const id = element.getAttribute("href");
        const targetElement = document.querySelector(id);
        return targetElement.offsetTop;
    };

    // Função de rolagem suave
    const scroll = (distance) => {
        window.scrollTo({
            top: distance,
            behavior: "smooth",
        });
    };

    // Função para rolar até a seção e fechar o menu
    const scrollToSection = (e) => {
        e.preventDefault();
        closeMenu(); // Fecha o menu ao clicar

        const distanceTop = getDistance(e.target) - 90; // Ajuste do topo
        scroll(distanceTop);
    };

    //////////////////////////////////////////
    // FUNCOES PARA A BARRA DE BUSCA
    /////////////////////////////////////////
    const [searchTerm, setSearchTerm] = useState("");
    const [items] = useState([
        "Lions",
        "Carros",
        "Atendimento",
        "Futuro",
        "Associe-se",
        "Garantia",
        "Veiculos",
        "Meio ambiente",
        "Flex",
        "Seguro",
    ]);
    // Função para filtrar os itens com base no input de busca
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(searchTerm.trim());

    return (
        <section className="top-menu">
            <div className="top-bar">
                <a href="/" className="logo">
                    <img src={Logo} alt="Logo Lions" />
                </a>
                <section className="search">
                    <div className="search-container">
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Digite para buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Exibe a lista apenas se houver um termo de busca */}
                    {searchTerm.trim() !== "" && (
                        <ul id="itemList">
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            ) : (
                                <li>Nenhum item encontrado</li>
                            )}
                        </ul>
                    )}

                    {/* <ul id="itemList">
                        <li>Lions</li>
                        <li>Carros</li>
                        <li>Atendimento</li>
                        <li>Futuro</li>
                        <li>Associe-se</li>
                        <li>Garantia</li>
                        <li>Veiculos</li>
                        <li>Meio ambiente</li>
                        <li>Flex</li>
                        <li>Seguro</li>
                    </ul> */}
                </section>

                <nav
                    className="navegation"
                    ref={navRef}
                    style={{ width: menuOpen ? "100%" : "0" }}
                >
                    <ul>
                        <li className="mobile-menu-close">
                            <span
                                className="material-symbols-outlined"
                                onClick={closeMenu}
                            >
                                close
                            </span>
                        </li>
                        <li>
                            <a href="#home" onClick={scrollToSection}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#equipe" onClick={scrollToSection}>
                                Equipe
                            </a>
                        </li>
                        <li>
                            <a href="#sobre" onClick={scrollToSection}>
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#beneficios" onClick={scrollToSection}>
                                Beneficios
                            </a>
                        </li>
                    </ul>
                </nav>

                <ul className="social-bar">
                    <li>
                        <a
                            href="https://www.instagram.com/lionsseminovos/"
                            target="_blank"
                        >
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.9356 0H5.06439C2.27187 0 0 2.27187 0 5.06439V11.9356C0 14.7281 2.27187 17 5.06439 17H11.9356C14.7281 17 17 14.7281 17 11.9356V5.06439C17 2.27187 14.7281 0 11.9356 0ZM15.2898 11.9356C15.2898 13.7881 13.7881 15.2898 11.9356 15.2898H5.06439C3.21194 15.2898 1.7102 13.7881 1.7102 11.9356V5.06439C1.7102 3.21191 3.21194 1.7102 5.06439 1.7102H11.9356C13.7881 1.7102 15.2898 3.21191 15.2898 5.06439V11.9356Z"
                                    fill="#252525"
                                />
                                <path
                                    d="M8.49995 4.1032C6.07555 4.1032 4.10315 6.0756 4.10315 8.49997C4.10315 10.9243 6.07555 12.8968 8.49995 12.8968C10.9244 12.8968 12.8968 10.9244 12.8968 8.49997C12.8968 6.07557 10.9244 4.1032 8.49995 4.1032ZM8.49995 11.1866C7.01617 11.1866 5.81335 9.98378 5.81335 8.5C5.81335 7.01622 7.0162 5.81339 8.49995 5.81339C9.98374 5.81339 11.1866 7.01622 11.1866 8.5C11.1866 9.98375 9.98371 11.1866 8.49995 11.1866Z"
                                    fill="#252525"
                                />
                                <path
                                    d="M12.9054 5.18977C13.4872 5.18977 13.9589 4.71807 13.9589 4.13621C13.9589 3.55434 13.4872 3.08264 12.9054 3.08264C12.3235 3.08264 11.8518 3.55434 11.8518 4.13621C11.8518 4.71807 12.3235 5.18977 12.9054 5.18977Z"
                                    fill="#252525"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/lionsseminovos"
                            target="_blank"
                        >
                            <svg
                                width="9"
                                height="17"
                                viewBox="0 0 9 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.00672 2.69556C5.94749 2.69556 5.64638 3.16306 5.64638 4.19369V5.89475H8.4637L8.18608 8.65034H5.64584V17H2.27435V8.64981H0V5.89422H2.27542V4.24097C2.27542 1.46094 3.39552 0 6.53744 0C7.21173 0 8.01844 0.053125 8.5 0.120063V2.70725"
                                    fill="#252525"
                                />
                            </svg>
                        </a>
                    </li>
                    <li className="menu-mobile">
                        <span
                            className="material-symbols-outlined"
                            onClick={openMenu}
                        >
                            menu
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default TopMenu;
