import "./style.css";


function WelcomePage( {setRenderMainPage}) {

    return (
        <div class="welcomePage">
                <main className="welcomeMain">
                    <div className="welcomeDiv">
                        <img className="welcomeDiv__image" src={require("../../images/nuKenzieAlt.png")} alt="Nu Kenzie Logo" />
                        <h1 className="title 1 welcomeDiv__title">Centralize o controle de suas finanças</h1>
                        <span className="welcomeDiv__span">de forma rápida e segura</span>
                        <button onClick={() => setRenderMainPage(true)} className="welcomeDiv__button">Iniciar</button>
                    </div>
                    <div className="welcomeIconDiv">
                        <img src={require("../../images/welcomeIcon.png")} alt="welcomeIcon" />
                    </div>
                </main>

        </div>
    )
}

export default WelcomePage;