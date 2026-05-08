import '../src/styles/main.scss';

import Advantages from './components/Advantages';
import Costs from './components/Costs';
import Decisions from './components/Decisions';
import Difference from './components/Difference';
import Footer from './components/Footer';
import Header from './components/Header';
import Reviews from './components/Reviews';
import StartScreen from './components/StartScreen';

function App() {
  return (
    <div className="container">
      <Header />
      <StartScreen />
      <Advantages />
      <Difference />
      <Decisions />
      <Reviews />
      <Costs />
      <Footer />
    </div>
  );
}

export default App;
