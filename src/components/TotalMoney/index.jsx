import "./style.css";

function TotalMoney({listTransactions, isTotalMoneyActive}) {

    if(isTotalMoneyActive) {
        return (
            <div className="totalMoney">
                <div className="totalMoney__valueDiv">
                    <span className="title3">Valor total</span>
                    <span className="title3">
                        {"R$" +
                        listTransactions.reduce((acc, curr) => acc + curr.value, 0)}
                    </span>
                </div>
                <p className="totalMoney__text">O valor se refere ao saldo</p>
            </div>
        )
    }
}

export default TotalMoney;