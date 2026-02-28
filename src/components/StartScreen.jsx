import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

import Bubble from '../static/buble-main copy.png';

const words = ['ваш бизнес', 'на', 'полном', 'автопилоте'];

export default function StartScreen() {
  // Движение пузыря
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const [displayedWords, setDisplayedWords] = useState(words.map(() => ''));

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2; // -1..1
    const y = (e.clientY / innerHeight - 0.5) * 2; // -1..1
    mouseX.set(x * 50); // максимум 50px
    mouseY.set(y * 50);
  };

  // Анимация текста по буквам
  useEffect(() => {
    const lettersPerWord = words.map((w) => w.split(''));
    let currentWord = 0;
    let currentLetter = 0;

    const animate = () => {
      if (currentWord >= lettersPerWord.length) {
        return;
      }

      setDisplayedWords((prev) => {
        const newWords = [...prev];
        if (lettersPerWord[currentWord]) {
          newWords[currentWord] = lettersPerWord[currentWord].slice(0, currentLetter + 1).join('');
        }
        return newWords;
      });

      currentLetter++;
      if (lettersPerWord[currentWord] && currentLetter >= lettersPerWord[currentWord].length) {
        currentLetter = 0;
        currentWord++;
      }

      if (currentWord < lettersPerWord.length) {
        setTimeout(animate, 50);
      }
    };

    animate();
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } },
  };

  return (
    <div className="start-screen" onMouseMove={handleMouseMove}>
      <h1 className="start-screen-title">
        {displayedWords.map((word, wIdx) => (
          <span
            key={wIdx}
            style={{ display: 'block' }}
            className={wIdx === 3 ? 'start-screen-title-span' : ''}
          >
            {word.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                transition={{ delay: i * 0.03 + wIdx * 0.2 }}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </h1>

      <motion.p
        className="start-screen-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, ease: 'easeOut' }}
      >
        Бизнес — это не только прибыль, но и время, свобода и масштаб. Мы создаем умные системы,
        которые берут на себя рутину, устраняют ошибки и позволяют вам сосредоточиться на
        стратегическом развитии.
      </motion.p>

      <motion.img
        src={Bubble}
        alt="bubble-main"
        className="start-screen-bubble"
        style={{ x: smoothX, y: smoothY }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      />
    </div>
  );
}
