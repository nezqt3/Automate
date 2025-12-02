import StartScreen from "./components/StartScreen";
import "../src/styles/main.scss";
import Header from "./components/Header";
import Advantages from "./components/Advantages";
import Difference from "./components/Difference";
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
    </div>
  );
}

export default App;
