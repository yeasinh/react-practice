import logo from "./logo.svg";
import "./App.css";
import MyFormik from "./screens/MyFormik";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyFormik />
      </BrowserRouter>
    </div>
  );
}

export default App;
