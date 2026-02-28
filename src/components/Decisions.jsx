import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    number: '01',
    title: 'Анализ — разбираем процессы и выявляем точки роста.',
    text: 'Совместно с вашей командой погружаемся в задачи и определяем, где технологии принесут максимальную пользу.',
  },
  {
    number: '02',
    title: 'Система — создаём и настраиваем автоматизаицю под ваш бизнес.',
    text: 'Не просто «сдаём проект», а помогаем вашей команде освоить инструмент и начать получать от него результат.',
  },
  {
    number: '03',
    title: 'Запуск — внедряем решения и сопровождаем до стабильной работы.',
    text: 'Воплощаем найденные решения в готовый продукт — удобный цифровой помощник для ваших сотрудников и клиентов.',
  },
];

export default function Decisions() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [slideIndex, setSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(slides[slideIndex]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalHeight = window.innerHeight * 3; // 3 слайда = 3 экрана высоты
    section.style.height = `${totalHeight}px`;

    let ticking = false;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const totalScroll = totalHeight - window.innerHeight;
      const newProgress = Math.min(scrolled / totalScroll, 1); // прогресс от 0 до 1 для каждого слайда

      // Определяем активный слайд (0-33% = 1, 33-66% = 2, 66-100% = 3)
      const slideIndexLocal = Math.min(Math.floor(newProgress * 3), 2);
      setSlideIndex(slideIndexLocal);
      setCurrentSlide(slides[slideIndexLocal]);
      setProgress(newProgress);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="decisions-section" ref={sectionRef} id="decisions">
      <div className="decisions-sticky">
        <div className="decisions-viewport" ref={viewportRef}>
          <div className="decisions-track" ref={trackRef}>
            <AnimatePresence mode="wait">
              <motion.article
                className="decisions-card"
                key={currentSlide.number}
                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.98 }}
                transition={{
                  duration: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.div
                  className="decisions-card-body"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <p>{currentSlide.text}</p>
                  <h3>
                    <span>{currentSlide.title.split(' ')[0].replace('—', '')}</span>
                    {currentSlide.title.split(' ')[0].includes('—') ? '—' : ''}{' '}
                    {currentSlide.title.split(' ').slice(1).join(' ')}
                  </h3>
                </motion.div>
                <div className="decisions-card-footer">
                  <div className="decisions-card-footer__info">
                    <span>Automate</span>
                    <span>Ваш рост в режиме автопилота.</span>
                  </div>
                  <div className="decisions-card-footer__dots">
                    <div className={`dot ${slideIndex === 0 ? 'active' : ''}`}>01</div>
                    <div className="block-line-dot">
                      <div
                        className="line-dot line1"
                        style={{ width: `${Math.min(progress * 3, 1) * 100}%` }}
                      />
                    </div>
                    <div className={`dot ${slideIndex === 1 ? 'active' : ''}`}>02</div>
                    <div className="block-line-dot">
                      <div
                        className="line-dot line2"
                        style={{
                          width: `${Math.max(0, Math.min((progress - 1 / 3) * 3, 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <div className={`dot ${slideIndex === 2 ? 'active' : ''}`}>03</div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
