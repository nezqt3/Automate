import '../src/styles/main.scss';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

import Advantages from './components/Advantages/Advantages';
import Costs from './components/Costs/Costs';
import Decisions from './components/Decisions/Decisions';
import Difference from './components/Difference/Difference';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Reviews from './components/Reviews/Reviews';
import StartScreen from './components/StartScreen/StartScreen';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      syncTouch: false,
    });

    function raf(time: number) {
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
