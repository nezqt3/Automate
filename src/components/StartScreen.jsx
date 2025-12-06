import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Bubble from "../static/buble-main copy.png";

const words = ["ваш бизнес", "на", "полном", "автопилоте"];

export default function StartScreen() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [smoothCoords, setSmoothCoords] = useState({ x: 0, y: 0 });

  const [scaleBubble, setScaleBubble] = useState(0);
  const [rotateBubble, setRotateBubble] = useState(-180);

  const [opacityHeader, setOpacityHeader] = useState(0);
  const [translateY, setTranslateY] = useState(-10);

  const [displayedWords, setDisplayedWords] = useState(words.map(() => ""));

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 2;
    const y = (event.clientY / innerHeight - 0.5) * 2;
    setCoords({ x, y });
  };

  // Плавное движение пузыря
  useEffect(() => {
    const interval = setInterval(() => {
      setSmoothCoords((prev) => ({
        x: prev.x + (coords.x - prev.x) * 0.1,
        y: prev.y + (coords.y - prev.y) * 0.1,
      }));
    }, 16);
    return () => clearInterval(interval);
  }, [coords]);

  // Анимация пузыря
  useEffect(() => {
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 400, 1);
      setScaleBubble(progress);
      setRotateBubble(-180 + progress * 180);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  // Анимация параграфа
  useEffect(() => {
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 400, 1);
      setOpacityHeader(progress);
      setTranslateY(-10 + progress * 10);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  // Анимация текста по буквам
  useEffect(() => {
    const lettersPerWord = words.map((w) => w.split(""));
    let currentWord = 0;
    let currentLetter = 0;

    const interval = setInterval(() => {
      if (currentWord >= lettersPerWord.length) {
        clearInterval(interval);
        return;
      }

      setDisplayedWords((prev) => {
        const newWords = [...prev];
        if (lettersPerWord[currentWord]) {
          newWords[currentWord] = lettersPerWord[currentWord]
            .slice(0, currentLetter + 1)
            .join("");
        }
        return newWords;
      });

      currentLetter++;
      if (lettersPerWord[currentWord] && currentLetter >= lettersPerWord[currentWord].length) {
        currentLetter = 0;
        currentWord++;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div
      className="start-screen"
      onMouseMove={handleMouseMove}
      id="start-screen"
    >
      <h1 className="start-screen-title">
        {displayedWords.slice(0, 3).map((word, wIdx) => (
          <span key={wIdx}>
            {word.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                transition={{ delay: i * 0.05 }}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {letter}
              </motion.span>
            ))}
            <br />
          </span>
        ))}

        <span className="start-screen-title-span" style={{ display: "block", textAlign: "left" }}>
          {displayedWords[3].split("").map((letter, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              transition={{ delay: i * 0.05 }}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      </h1>

      <motion.p
        className="start-screen-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: opacityHeader, y: translateY }}
        transition={{ duration: 0.4 }}
      >
        Бизнес — это не только прибыль, но и время, свобода и масштаб. Мы
        создаем умные системы, которые берут на себя рутину, устраняют ошибки и
        позволяют вам сосредоточиться на стратегическом развитии.
      </motion.p>

      <motion.img
        src={Bubble}
        alt="bubble-main"
        className="start-screen-bubble"
        animate={{
          x: smoothCoords.x * 50,
          y: smoothCoords.y * 50,
          rotate: rotateBubble + "deg",
          scale: scaleBubble,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        
      />
    </div>
  );
}
