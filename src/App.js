import StartScreen from "./components/StartScreen";
import "../src/styles/main.scss";
import Header from "./components/Header";
import Advantages from "./components/Advantages";
import Difference from "./components/Difference";
import Costs from "./components/Costs";

function App() {
  return (
    <div className="container">
      <Header />
      <StartScreen />
      <Advantages />
      <Difference />

      <Costs />
    </div>
  );
}

export default App;
