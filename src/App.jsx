import Header from "./parts/header";
import BarraApresentacao from "./parts/barApresentation";
import Apresentacao from "./parts/apresentation";
import Sobre from "./parts/about";
import Beneficios from "./parts/benefits";
import Associacao from "./parts/association";
import TopMenu from "./components/top-menu";

import "./assets/css/styles.min.css";

function App() {
    return (
        <>
            <TopMenu />
            <Header />
            <BarraApresentacao />
            <Apresentacao />
            <Sobre />
            <Beneficios />
            <Associacao />
        </>
    );
}

export default App;
