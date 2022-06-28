import "./App.css";
import  Home from './components/homeComponent/homeComponent';
import NavBar from "./components/navBar/navBar";

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
};

export default App;
