import { useEffect, useRef } from "react";

const slides = [
  {
    number: "01",
    title: "Диагностика процессов",
    text: "Определяем узкие места и задачи, которые можно автоматизировать без боли и долгих внедрений.",
    tag: "Быстрый старт",
  },
  {
    number: "02",
    title: "Сценарии автоматизации",
    text: "Собираем цепочку действий так, чтобы решения работали сразу и масштабировались под рост.",
    tag: "Без лишних шагов",
  },
  {
    number: "03",
    title: "Визуальные отчеты",
    text: "Вы видите результат в цифрах: скорость, экономия времени и стабильность процессов.",
    tag: "Прозрачная польза",
  },
];

export default function Decisions() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const targetX = useRef(0);
  const currentX = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return undefined;

    const update = () => {
      const viewportWidth =
        viewportRef.current?.offsetWidth || window.innerWidth;
      const viewportHeight = window.innerHeight;
      const totalScrollX = Math.max(0, track.scrollWidth - viewportWidth);

      section.style.height = `${totalScrollX + viewportHeight}px`;

      const rect = section.getBoundingClientRect();
      const maxScroll = totalScrollX;
      const scrolled = Math.min(Math.max(-rect.top, 0), maxScroll);
      const progress = maxScroll ? scrolled / maxScroll : 0;

      targetX.current = -progress * totalScrollX;
    };

    const animate = () => {
      const delta = targetX.current - currentX.current;
      currentX.current += delta * 0.12;

      track.style.transform = `translate3d(${currentX.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onScroll = () => update();
    const onResize = () => update();

    update();
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="decisions-section" ref={sectionRef} id="decisions">
      <div className="decisions-sticky">
        <div className="decisions-header">
          <div>
            <p className="decisions-eyebrow">Информативный блок</p>
            <h2>Решения, которые объясняют себя</h2>
          </div>
          <p className="decisions-subtitle">
            Листайте вниз — блок плавно поедет вправо и покажет ключевые
            преимущества автоматизации.
          </p>
        </div>

        <div className="decisions-viewport" ref={viewportRef}>
          <div className="decisions-track" ref={trackRef}>
            {slides.map((slide) => (
              <article className="decisions-card" key={slide.number}>
                <div className="decisions-card-top">
                  <span className="decisions-card-number">{slide.number}</span>
                  <span className="decisions-card-tag">{slide.tag}</span>
                </div>
                <div className="decisions-card-body">
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
                <div className="decisions-card-footer">
                  <span>Automate</span>
                  <span className="decisions-card-dot" />
                  <span>Проверено на практике</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
