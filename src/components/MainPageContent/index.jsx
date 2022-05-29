import "./style.css";
import ExpensesForm from "../ExpensesForm";
import TotalMoney from "../TotalMoney";
import ExpensesOverview from "../ExpensesOverview";
import { useState } from "react"



function MainPageContent() {
    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "despesa", value: -150 }
    ]);
    const [isTotalMoneyActive, setIsTotalMoneyActive] = useState(true);


    return (
        <main>
            <section className="desktopLeft">
                <ExpensesForm setIsTotalMoneyActive={setIsTotalMoneyActive} isTotalMoneyActive={isTotalMoneyActive} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
                <TotalMoney isTotalMoneyActive={isTotalMoneyActive} listTransactions={listTransactions}/>
            </section>
            <section className="desktopRight">
                <ExpensesOverview isTotalMoneyActive={isTotalMoneyActive} listTransactions={ listTransactions }/>
            </section>
        </main>
    )
}

export default MainPageContent