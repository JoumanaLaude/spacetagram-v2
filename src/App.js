import './App.css';
import Main from './Main';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        Spacetagram v2
      </div>

      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
