import '../src/styles/main.scss';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

import Advantages from './components/Advantages';
import Costs from './components/Costs';
import Decisions from './components/Decisions';
import Difference from './components/Difference';
import Footer from './components/Footer';
import Header from './components/Header';
import Reviews from './components/Reviews';
import StartScreen from './components/StartScreen';

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
      <Reviews />
      <Costs />
      <Footer />
    </div>
  );
}

export default App;
