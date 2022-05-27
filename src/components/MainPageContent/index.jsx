import "./style.css";
import ExpensesForm from "../ExpensesForm";
import TotalMoney from "../TotalMoney";


function MainPageContent() {
    return (
        <main>
            <ExpensesForm />
            <TotalMoney />
        </main>
    )
}

export default MainPageContent