import { useState, useEffect } from "react";
import Bubble from "../static/buble-main.png";

export default function StartScreen() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [smoothCoords, setSmoothCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 2;
    const y = (event.clientY / innerHeight - 0.5) * 2;
    setCoords({ x, y });
  };

  // плавное движение (инерция)
  useEffect(() => {
    const interval = setInterval(() => {
      setSmoothCoords((prev) => ({
        x: prev.x + (coords.x - prev.x) * 0.1,
        y: prev.y + (coords.y - prev.y) * 0.1,
      }));
    }, 16); // примерно 60fps
    return () => clearInterval(interval);
  }, [coords]);

  return (
    <div className="start-screen" onMouseMove={handleMouseMove}>
      <h1 className="start-screen-title">
        ваш бизнес
        <br />
        на
        <br />
        полном
        <br />
        <span className="start-screen-title-span">автопилоте</span>
      </h1>
      <p className="start-screen-text">
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
            scale(1.05)
          `,
          transition: "transform 0.05s ease-out",
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
        }}
      />
    </div>
  );
}
