import "./style.css";
import EmptyOverviewContent from "../EmptyOverviewContent";
import OverviewItems from "../OverviewItems";

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
                <p className="title2 expensesOverview__warning-p" style={{display: "none"}}>Você ainda não possui nenhum lançamento</p>
            </div>
            <div className="expensesOverview__content">
                <ul className="expensesOverview__content-ul">
                    <OverviewItems/>
                    <OverviewItems/>
                    <OverviewItems/>
                    {/* <EmptyOverviewContent /> */}
                </ul>
            </div>
        </div>
    )
}

export default ExpensesOverview;