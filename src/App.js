import StartScreen from "./components/StartScreen";
import "../src/styles/main.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <StartScreen />
    </div>
  );
}

export default App;
