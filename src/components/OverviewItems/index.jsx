import "./style.css";

function OverviewItems() {
    return (

            <li className="expensesOverview__content-ul-li">
                <div className="overviewLiUpperDiv">
                    <p>Salário - Mês dezembro</p>
                    <span ov>R$ 6660</span>
                    <img src={require("../../images/buttonTrash.png")} alt="button trash" />
                </div>
                <div className="overviewLiLowerDiv">
                    <span>Entrada</span>
                </div>
            </li>

    )
}

export default OverviewItems;