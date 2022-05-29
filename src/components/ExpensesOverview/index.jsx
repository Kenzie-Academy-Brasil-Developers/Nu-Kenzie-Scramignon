import "./style.css";
import EmptyOverviewContent from "../EmptyOverviewContent";
import OverviewItems from "../OverviewItems";
import { useState } from "react";

function ExpensesOverview({ listTransactions, isTotalMoneyActive }) {
    const [filterType, setFilterType] = useState(["entrada", "despesa"])


    return (
        <div className="expensesOverview">
            <div className="expensesOverview__header">
                <span className="title3">Resumo financeiro</span>
                <div className="expensesOverview__header-buttonDiv">
                    <button onClick={() => setFilterType(["entrada", "despesa"])} typeArray = {["entrada", "despesa"]}value="todos" className="expensesOverview__header-buttonDiv-button">Todos</button>
                    <button onClick={() => setFilterType(["entrada"])} typeArray = {["entrada"]} className="expensesOverview__header-buttonDiv-button">Entradas</button>
                    <button onClick={() => setFilterType(["despesa"])} typeArray = {["despesa"]} className="expensesOverview__header-buttonDiv-button">Despesas</button>
                </div>
            </div>
            <div className="expensesOverview__warning">
                <p className="title2 expensesOverview__warning-p" style={{display: "none"}}>Você ainda não possui nenhum lançamento</p>
            </div>
            <div className="expensesOverview__content">
                <ul className="expensesOverview__content-ul">
                    
                    {
                        isTotalMoneyActive ? listTransactions.map((transaction, index) => <OverviewItems filterType={filterType}key={index} transaction={transaction}/>) :
                        <EmptyOverviewContent />
                    }
                    
                </ul>
            </div>
        </div>
    )
}

export default ExpensesOverview;