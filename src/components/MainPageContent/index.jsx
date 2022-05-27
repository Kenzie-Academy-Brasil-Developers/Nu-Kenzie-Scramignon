import "./style.css";
import ExpensesForm from "../ExpensesForm";
import TotalMoney from "../TotalMoney";
import ExpensesOverview from "../ExpensesOverview";


function MainPageContent() {
    return (
        <main>
            <section className="desktopLeft">
                <ExpensesForm />
                <TotalMoney />
            </section>
            <section className="desktopRight">
                <ExpensesOverview />
            </section>
        </main>
    )
}

export default MainPageContent