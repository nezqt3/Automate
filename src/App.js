import StartScreen from "./components/StartScreen";
import "../src/styles/main.scss";
import Header from "./components/Header";
import Advantages from "./components/Advantages";
import Difference from "./components/Difference";

function App() {
  return (
    <div className="container">
      <Header />
      <StartScreen />
      <Advantages />
      <Difference/>
    </div>
  );
}

export default App;
