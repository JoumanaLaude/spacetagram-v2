import './App.css';
import Main from './Main';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Spacetagram v2</h1>

        <BrowserRouter>
          <Main />
        </BrowserRouter>
    </>
  );
}

export default App;
