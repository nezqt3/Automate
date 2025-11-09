import { useState, useEffect, useRef } from "react";
import Bubble from "../static/buble-main.png";

export default function StartScreen() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [smoothCoords, setSmoothCoords] = useState({ x: 0, y: 0 });

  const [scaleBubble, setScaleBubble] = useState(0);
  const [rotateBubble, setRotateBubble] = useState(-180);

  const [opacityHeader, setOpacityHeader] = useState(0);
  const [translateY, setTranslateY] = useState(-10);

  const words = ["ваш бизнес", "на", "полном", "автопилоте"];
  const [displayedWords, setDisplayedWords] = useState(["", "", "", ""]);

  const currentWordRef = useRef(0);
  const currentLetterRef = useRef(0);

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 2;
    const y = (event.clientY / innerHeight - 0.5) * 2;
    setCoords({ x, y });
  };

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

  useEffect(() => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 400, 1); // 0.8 сек
      setOpacityHeader(progress);
      setTranslateY(-10 + progress * 10); // от -10px до 0px

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSmoothCoords((prev) => ({
        x: prev.x + (coords.x - prev.x) * 0.1,
        y: prev.y + (coords.y - prev.y) * 0.1,
      }));
    }, 16); // примерно 60fps
    return () => clearInterval(interval);
  }, [coords]);

  useEffect(() => {
    const lettersPerWord = words.map((w) => w.split(""));

    const interval = setInterval(() => {
      const cw = currentWordRef.current;
      const cl = currentLetterRef.current;

      if (cw >= lettersPerWord.length) {
        clearInterval(interval);
        return;
      }

      setDisplayedWords((prev) => {
        const newWords = [...prev];
        newWords[cw] = lettersPerWord[cw].slice(0, cl + 1).join("");
        return newWords;
      });

      currentLetterRef.current++;
      if (currentLetterRef.current >= lettersPerWord[cw].length) {
        currentLetterRef.current = 0;
        currentWordRef.current++;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="start-screen"
      onMouseMove={handleMouseMove}
      id="start-screen"
    >
      <h1 className="start-screen-title">
        {displayedWords[0].split("").map((letter, i) => (
          <span
            key={i}
            style={{
              opacity: 1,
              transition: `opacity 0.3s ease ${i * 0.05}s`,
            }}
          >
            {letter}
          </span>
        ))}
        <br />
        {displayedWords[1].split("").map((letter, i) => (
          <span
            key={i}
            style={{
              opacity: 1,
              transition: `opacity 0.3s ease ${i * 0.05}s`,
            }}
          >
            {letter}
          </span>
        ))}
        <br />
        {displayedWords[2].split("").map((letter, i) => (
          <span
            key={i}
            style={{
              opacity: 1,
              transition: `opacity 0.3s ease ${i * 0.05}s`,
            }}
          >
            {letter}
          </span>
        ))}
        <br />
        <span className="start-screen-title-span">
          {displayedWords[3].split("").map((letter, i) => (
            <span
              key={i}
              style={{
                opacity: 1,
                transition: `opacity 0.3s ease ${i * 0.05}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </span>
      </h1>
      <p
        className="start-screen-text"
        style={{
          opacity: opacityHeader,
          transform: `translateY(${translateY}px)`,
          transition: "opacity 0.4s linear, transform 0.4s linear",
        }}
      >
        Бизнес — это не только прибыль, но и время, свобода и масштаб. Мы
        создаем умные системы, которые берут на себя рутину, устраняют ошибки и
        позволяют вам сосредоточиться на стратегическом развитии.
      </p>
      <img
        src={Bubble}
        alt="bubble-main"
        className="start-screen-bubble"
        style={{
          transform: `
            translate(${smoothCoords.x * 50}px, ${smoothCoords.y * 50}px)
            rotateX(${smoothCoords.y * 30}deg)
            rotateY(${smoothCoords.x * 30}deg)
          `,
          scale: scaleBubble,
          rotate: rotateBubble + "deg",
          transition:
            "transform 0.05s ease-out scale 0.4s linear rotate 0.4s linear",
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
        }}
      />
    </div>
  );
}
