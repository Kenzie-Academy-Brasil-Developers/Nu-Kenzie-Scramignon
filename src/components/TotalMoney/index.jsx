import "./style.css";

function TotalMoney() {
    return (
        <div className="totalMoney">
            <div className="totalMoney__valueDiv">
                <span className="title3">Valor total</span>
                <span className="title3">R$ 8456</span>
            </div>
            <p className="totalMoney__text">O valor se refere ao saldo</p>
        </div>
    )
}

export default TotalMoney;