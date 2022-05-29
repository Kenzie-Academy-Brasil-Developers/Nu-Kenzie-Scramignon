import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import WelcomePage from './components/WelcomePage'

function App() {
  const [renderMainPage, setRenderMainPage] = useState(false)


  return (
    <div className="App">
      {renderMainPage ? <MainPage setRenderMainPage={setRenderMainPage}/> : <WelcomePage setRenderMainPage={setRenderMainPage}/>}
    </div>
  );
}

export default App;
