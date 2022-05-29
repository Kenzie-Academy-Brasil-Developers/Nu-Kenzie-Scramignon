import Header from "../Header";
import MainPageContent from "../MainPageContent";
import "./style.css"

function MainPage({setRenderMainPage}) {
    return (
        <>
            <Header setRenderMainPage={setRenderMainPage}/>
            <MainPageContent />
        </>
        
    )
}

export default MainPage;