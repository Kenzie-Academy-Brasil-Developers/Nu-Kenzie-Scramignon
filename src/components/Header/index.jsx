import "./style.css";

function Header () {
    return(
        <header className="mainHeader">
            <img className="mainHeader--logo" src={require("../../images/nuKenzie.png")} alt="Nu Kenzie Logo"/>
            
            <button className=" mainHeader--button">Inicio</button>
        </header>
    )
}

export default Header;