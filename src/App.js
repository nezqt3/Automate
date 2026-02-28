import StartScreen from './components/StartScreen';
import '../src/styles/main.scss';
import Header from './components/Header';
import Advantages from './components/Advantages';
import Difference from './components/Difference';
import Decisions from './components/Decisions';
import Costs from './components/Costs';
import Footer from './components/Footer';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="container">
      <Header />
      <StartScreen />
      <Advantages />
      <Difference />
      <Decisions />

      <Costs />
      <Footer />
    </div>
  );
}

export default App;
