import "./Styles/App.css";
import NavBar from "./Components/NavBar";
import Title from "./Components/Title";
import Description from "./Components/Description";
import Phones from "./Components/Phones";
import Downloads from "./Components/Downloads";


function App() {
  return (
    <div className="App background">
        <NavBar />
        <Title />
        <Description />
        <Phones />
        <Downloads />
    </div>
  );
}

export default App;
