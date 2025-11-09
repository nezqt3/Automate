import { useState, useEffect } from "react";

export default function Header() {
  const [opacityHeader, setOpacityHeader] = useState(0);
  const [translateY, setTranslateY] = useState(-10);

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

  return (
    <div
      className="header"
      style={{
        opacity: opacityHeader,
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.4s linear, transform 0.4s linear",
      }}
    >
      <p className="header-logo">automate.</p>

      <nav className="header-navigation">
        <p className="header-navigation-text">Главная</p>
        <p className="header-navigation-text">Решения</p>
        <p className="header-navigation-text">Кейсы</p>
        <p className="header-navigation-text">О нас</p>
        <p className="header-navigation-text">Контакты</p>
      </nav>

      <button className="header-button">Бесплатная консультация</button>
    </div>
  );
}
