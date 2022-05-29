import "./style.css";
import { useState } from "react";

function ExpensesForm( {listTransactions, setListTransactions, isTotalMoneyActive, setIsTotalMoneyActive}) {
    const [expenseDescription, setExpenseDescription] = useState("");
    const [expenseValue, setExpenseValue] = useState(0);
    const [expenseType, setExpenseType] = useState("entrada");


    function submitTransaction(event) {
        event.preventDefault();
        const transaction = {
            description: expenseDescription,
            type: expenseType,
            value: expenseType === "entrada" ? expenseValue : -Math.abs(expenseValue)
        };
        if(!transaction.type || !transaction.description) {
            return window.alert("Preencha todos os campos")
        }
        if(!isTotalMoneyActive) setIsTotalMoneyActive(true);
        setListTransactions([transaction, ...listTransactions])
    }



    return (
        <form className="expensesForm">
            <div className="expensesForm__descriptionDiv">
                <label className="caption" htmlFor="description">Descrição</label>
                <input required onChange={(event) => setExpenseDescription(event.target.value)} placeholder="Digite sua descrição aqui"type="text" name="description" id="formDescription" />
                <span className="expensesForm__descriptionDiv-descriptionExample">Ex: Compra de roupas</span>
            </div>
            <div className="expensesForm__valueDiv">
                <div className="expensesForm__valueDiv-value">
                    <label htmlFor="value">Valor</label>
                    <input onChange={(event) => setExpenseValue(Number(event.target.value))} type="number" name="value" id="formValue" />
                </div>
                <div className="expensesForm__valueDiv-type">
                    <label htmlFor="valueType">Tipo de valor</label>
                    <select onChange={(event) => setExpenseType(event.target.value)} id="selectType" name="valueType">
                        <option value="entrada">Entradas</option>
                        <option value="despesa">Despesas</option>
                    </select>
                </div>
            </div>
            <div className="expensesForm__buttonDiv">
                <button onClick={submitTransaction} type="button" className="expensesForm__buttonDiv-button"
                >Inserir valor</button>
            </div>
        </form>
    )
}

export default ExpensesForm;