import StartScreen from "./components/StartScreen";
import "../src/styles/main.scss";
import Header from "./components/Header";
import Advantages from "./components/Advantages";
import Difference from "./components/Difference";
import Decisions from "./components/Decisions";
import Costs from "./components/Costs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <StartScreen />
      <Advantages />
      <Difference />

      <Costs />
      <Footer />

      <Decisions/>
    </div>
  );
}

export default App;
