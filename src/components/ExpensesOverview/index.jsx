import "./style.css";

function ExpensesOverview() {
    return (
        <div className="expensesOverview">
            <div className="expensesOverview__header">
                <span className="title3">Resumo financeiro</span>
                <div className="expensesOverview__header-buttonDiv">
                    <button className="expensesOverview__header-buttonDiv-button">Todos</button>
                    <button className="expensesOverview__header-buttonDiv-button">Entradas</button>
                    <button className="expensesOverview__header-buttonDiv-button">Despesas</button>
                </div>
            </div>
            <div className="expensesOverview__warning">
                <p className="title2 expensesOverview__warning-p">Você ainda não possui nenhum lançamento</p>
            </div>
            <div className="expensesOverview__content">
                <ul className="expensesOverview__content-ul">
                    <li className="expensesOverview__content-ul-li">
                        <div className="greyBar1"></div>
                        <div className="greyBar2"></div>
                    </li>
                    <li className="expensesOverview__content-ul-li">
                        <div className="greyBar1"></div>
                        <div className="greyBar2"></div>
                    </li>
                    <li className="expensesOverview__content-ul-li">
                        <div className="greyBar1"></div>
                        <div className="greyBar2"></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ExpensesOverview;