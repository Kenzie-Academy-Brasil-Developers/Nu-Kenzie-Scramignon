import "./style.css";

function Header ({ setRenderMainPage }) {
    return(
        <header className="mainHeader">
            <img className="mainHeader--logo" src={require("../../images/nuKenzie.png")} alt="Nu Kenzie Logo"/>
            
            <button onClick={() => setRenderMainPage(false)} className=" mainHeader--button">Início</button>
        </header>
    )
}

export default Header;