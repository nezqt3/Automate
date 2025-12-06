import { useEffect, useState, useRef } from "react";

export default function Decisions() {
  const [transformSlider, setTransformSlider] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Проверяем видимость элемента
      const isVisible = sliderRect.top < windowHeight && sliderRect.bottom > 0;
      if (!isVisible) {
        setTransformSlider(0);
        return;
      }

      const scrollPosition = window.scrollY;
      const sliderTop = sliderRect.top + scrollPosition; // Корректная позиция
      const sliderHeight = sliderRect.height;

      // Диапазон прокрутки: от входа в viewport до полного выхода
      const startScroll = sliderTop - windowHeight;
      const endScroll = sliderTop + sliderHeight;
      const maxScroll = endScroll - startScroll;

      // Текущая позиция прокрутки внутри диапазона
      const currentScroll = Math.max(0, scrollPosition - startScroll);
      let progress = currentScroll / maxScroll;
      progress = Math.min(1, progress); // Не ограничиваем снизу (может быть >1)

      // Рассчитываем сдвиг с учётом количества слайдов
      const totalSlides = 3;
      const slideWidthPercent = 100 / totalSlides; // 33.33% на слайд
      const maxSlideOffset = (totalSlides - 1) * 100; // 200% для 3 слайдов

      const slideOffset = progress * maxSlideOffset;
      setTransformSlider(slideOffset);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Инициализация

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      id="scroll-slider"
      style={{
        width: "100vw",
        overflowX: "hidden",
        transform: `translateX(-${transformSlider}%)`,
        transition: "transform 0.3s ease-out",
        border: "1px solid #ddd",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", width: "310%", height: "500px", gap: 25 }}>
        <div style={{ width: "100%", background: "red" }}>Слайд 1</div>
        <div style={{ width: "100%", background: "blue" }}>Слайд 2</div>
        <div style={{ width: "100%", background: "green" }}>Слайд 3</div>
      </div>
    </div>
  );
}
