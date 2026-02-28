import '../src/styles/main.scss';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

import Advantages from './components/Advantages.jsx';
import Costs from './components/Costs.jsx';
import Decisions from './components/Decisions.jsx';
import Difference from './components/Difference.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Reviews from './components/Reviews.jsx';
import StartScreen from './components/StartScreen.jsx';

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
