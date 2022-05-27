import "./style.css"

function Form() {
    return (
        <form className="expensesForm">
            <div className="expensesForm__descriptionDiv">
                <label className="caption" htmlFor="description">Descrição</label>
                <input placeholder="Digite sua descrição aqui"type="text" name="description" id="formDescription" />
                <span className="expensesForm__descriptionDiv-descriptionExample">Ex: Comprar de roupas</span>
            </div>
            <div className="expensesForm__valueDiv">
                <div className="expensesForm__valueDiv-value">
                    <label htmlFor="value">Valor</label>
                    <input type="number" name="value" id="formValue" />
                </div>
                <div className="expensesForm__valueDiv-type">
                    <label htmlFor="valueType">Tipo de valor</label>
                    <select style={{color: "var(--grey-3)"}} id="selectType"name="valueType">
                        <option value="entradas">Entradas</option>
                        <option value="despesas">Despesas</option>
                    </select>
                </div>
            </div>
            <div className="expensesForm__buttonDiv">
                <button type="submit" className="expensesForm__buttonDiv-button">Inserir valor</button>
            </div>
        </form>
    )
}

export default Form;