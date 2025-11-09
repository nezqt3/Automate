import StartScreen from "./components/StartScreen";
import "../src/styles/main.scss";
import Header from "./components/Header";
import Advantages from "./components/Advantages";

function App() {
  return (
    <div className="container">
      <Header />
      <StartScreen />
      <Advantages />
    </div>
  );
}

export default App;
