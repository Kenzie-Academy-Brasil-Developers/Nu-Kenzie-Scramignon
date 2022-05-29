import "./style.css";
import ButtonTrash from "../../images/ButtonTrash"

function OverviewItems({transaction, filterType, listTransactions, setListTransactions, setIsTotalMoneyActive}) {
    if(transaction.type === "entrada" && filterType.includes("entrada")) {
        return (
                <li className="expensesOverview__content-ul-li">
                    <div className="overviewLiUpperDiv">
                        <p>{transaction.description}</p>
                        <span>{"R$" + transaction.value}</span>
                        <ButtonTrash setIsTotalMoneyActive={setIsTotalMoneyActive} setListTransactions={setListTransactions} listTransactions={listTransactions}/>
                    </div>
                    <div className="overviewLiLowerDiv">
                        <span>{transaction.type}</span>
                    </div>
                </li>
        )
    } else if(transaction.type === "despesa" && filterType.includes("despesa")) {
        return (
            <li className="expensesOverview__content-ul-li alt">
                <div className="overviewLiUpperDiv">
                    <p>{transaction.description}</p>
                    <span>{"R$" + Math.abs(transaction.value)}</span>
                    <ButtonTrash setIsTotalMoneyActive={setIsTotalMoneyActive} setListTransactions={setListTransactions} listTransactions={listTransactions}/>
                </div>
                <div className="overviewLiLowerDiv">
                    <span>{transaction.type}</span>
                </div>
            </li>
    )
    }

}

export default OverviewItems;