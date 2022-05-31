import "./Styles/App.css";
import NavBar from "./Components/NavBar";
import Title from "./Components/Title";
import Description from "./Components/description";
import Phones from "./Components/Phones";

function App() {
  return (
    <div className="App background">
        <NavBar />
        <Title />
        <Description />
        <Phones />

    </div>
  );
}

export default App;
