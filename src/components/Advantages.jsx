import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import DarkImage from "../static/black-bubble.png";
import GrayImage from "../static/gray-bubble.png";

export default function Advantages() {

  const [animations, setAnimations] = useState({
    card1: { opacity: 0, translateY: 10 },
    card2: { opacity: 0, translateY: 10 },
    card3: { opacity: 0, translateY: 10 },
    card4: { opacity: 0, translateY: 10 },
    card5: { opacity: 0, translateY: 10 },
  });

  const [titleAnimation, setTitleAnimation] = useState({
    letters: [],
    isAnimated: false,
  });


  // Рефы для каждого блока
  const card1Ref = useInView({ threshold: 0.2, triggerOnce: true });
  const card2Ref = useInView({ threshold: 0.2, triggerOnce: true });
  const card3Ref = useInView({ threshold: 0.2, triggerOnce: true });
  const card4Ref = useInView({ threshold: 0.2, triggerOnce: true });
  const card5Ref = useInView({ threshold: 0.2, triggerOnce: true });

  // Эффект для каждого блока — запускает анимацию при inView
  useEffect(() => {
    if (card1Ref.inView) animateCard("card1");
  }, [card1Ref.inView]);


  useEffect(() => {
    if (card2Ref.inView) animateCard("card2");
  }, [card2Ref.inView]);


  useEffect(() => {
    if (card3Ref.inView) animateCard("card3");
  }, [card3Ref.inView]);


  useEffect(() => {
    if (card4Ref.inView) animateCard("card4");
  }, [card4Ref.inView]);

  useEffect(() => {
    if (card5Ref.inView) animateCard("card5");
  }, [card5Ref.inView]);

  useEffect(() => {
  if (card1Ref.inView && !titleAnimation.isAnimated) {
    const text = "automate.";
    const letters = text.split('').map((char, index) => ({
      char,
      opacity: 0,
      translateY: 20,
      delay: index * 50, // задержка между буквами: 50мс
    }));

    setTitleAnimation({ letters, isAnimated: true });

    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      setTitleAnimation((prev) => {
        const updatedLetters = prev.letters.map((letter) => {
          if (elapsed >= letter.delay) {
            const progress = Math.min((elapsed - letter.delay) / 300, 1); // 300мс на анимацию
            return {
              ...letter,
              opacity: progress,
              translateY: 40 - progress * 40, // от 20px до 0
            };
          }
          return letter;
        });
        return { ...prev, letters: updatedLetters };
      });

      if (elapsed < letters.length * 50 + 300) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}, [card1Ref.inView, titleAnimation.isAnimated]);


  // Функция анимации
  const animateCard = (cardKey) => {
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 400, 1); // 400 мс

      setAnimations((prev) => ({
        ...prev,
        [cardKey]: {
          opacity: progress,
          translateY: 10 - progress * 10, // от 10px до 0px
        },
      }));

      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const [activeFirstCard, setActiveFirstCard] = useState(false);
  const [activeSecondCard, setActiveSecondCard] = useState(false);
  const [activeThirdCard, setActiveThirdCard] = useState(false);
  const [activeFourthCard, setActiveFourthCard] = useState(false);
  const [activeFifthCard, setActiveFifthCard] = useState(false);

  const content = [
    {
      nonActiveTitle: "Ручные операции",
      activeTitle: "Полная\nавтоматизация",
      nonActiveText: "Сотрудники тратят часы на однотипные задачи вместо важных дел",
      activeText: "Роботы выполняют рутину вместо людей 24/7 без ошибок",
    },
    {
      nonActiveTitle: "Хаос в данных",
      activeTitle: "Единая платформа",
      nonActiveText: "Информация разбросана по разным системам, нет единой картины",
      activeText: "Все данные и процессы собраны в одной системе управления\n",
    },
    {
      nonActiveTitle: "Ошибки и просрочки",
      activeTitle: "Полная\nавтоматизация",
      nonActiveText: "Человеческий фактор стоит денег и портит репутацию\n",
      activeText: "Роботы выполняют рутину вместо людей 24/7 без ошибок",
    },
    {
      nonActiveTitle: "Медленная коммуникация",
      activeTitle: "Единая платформа",
      nonActiveText: "Клиенты ждут ответа, менеджеры не успевают обрабатывать заявки",
      activeText: "Все данные и процессы собраны в одной системе управления\n",
    },
    {
      nonActiveTitle: "Невозможно масштабировать",
      activeTitle: "Полная\nавтоматизация",
      nonActiveText: "Рост количества клиентов или заказов приводит к хаосу и перегрузке",
      activeText: "Роботы выполняют рутину вместо людей 24/7 без ошибок",
    },
  ];

  const renderTextWithBreaks = (text) => {
    return text.split('\n').map((line, index, array) => {
      if (line === '') {
        return <br key={`empty-${index}`} />;
      } else {
        return (
          <span key={index}>
            {line}
            {index < array.length - 1 && <br />}
          </span>
        );
      }
    });
  };


  return (
    <div className="advantages" >
      <div className="advantages-left">
        <div className="advantages-dark-gray" onMouseEnter={() => setActiveFirstCard(true)} onMouseLeave={() => setActiveFirstCard(false)} ref={card1Ref.ref}
          style={{
            opacity: animations.card1.opacity,
            transform: `translateY(${animations.card1.translateY}px)`,
            transition: "opacity 0.4s linear, transform 0.4s linear",
            }}>
          <img
            className="advantages-dark-gray-image"
            src={DarkImage}
            alt="dark"
          />
          <span>
            <p className="advantages-dark-gray-title">{activeFirstCard ? content[0].activeTitle : content[0].nonActiveTitle}</p>
            <p className="advantages-dark-gray-text">
              {activeFirstCard ? content[0].activeText : content[0].nonActiveText}
            </p>
          </span>
          <button className="advantages-dark-gray-button">Решение</button>
        </div>
        <div className="advantages-left-down">
          <div className="advantages-non-bg" onMouseEnter={() => setActiveSecondCard(true)} onMouseLeave={() => setActiveSecondCard(false)} ref={card2Ref.ref}
          style={{
            opacity: animations.card2.opacity,
            transform: `translateY(${animations.card2.translateY}px)`,
            transition: "opacity 0.4s linear, transform 0.4s linear",
            }}>
            <img
              className="advantages-non-bg-image"
              src={GrayImage}
              alt="dark"
            />
            <p className="advantages-non-bg-title">{activeSecondCard ? content[1].activeTitle : content[1].nonActiveTitle}</p>
            <p className="advantages-non-bg-text">
              {renderTextWithBreaks(activeSecondCard ? content[1].activeText : content[1].nonActiveText)}
            </p>
            <button className="advantages-non-bg-button">Решение</button>
          </div>
          <div className="advantages-dark-gray" onMouseEnter={() => setActiveThirdCard(true)} onMouseLeave={() => setActiveThirdCard(false)} ref={card3Ref.ref}
          style={{
            opacity: animations.card3.opacity,
            transform: `translateY(${animations.card3.translateY}px)`,
            transition: "opacity 0.4s linear, transform 0.4s linear",
            }}>
            <img
              className="advantages-dark-gray-image"
              src={DarkImage}
              alt="dark"
            />
            <p className="advantages-dark-gray-title">{activeThirdCard ? content[2].activeTitle : content[2].nonActiveTitle}</p>
            <p className="advantages-dark-gray-text">
              {renderTextWithBreaks(activeThirdCard ? content[2].activeText : content[2].nonActiveText)}
            </p>
            <button className="advantages-dark-gray-button">Решение</button>
          </div>
        </div>
      </div>
      <div className="advantages-right">
        <div className="advantages-non-bg" onMouseEnter={() => setActiveFourthCard(true)} onMouseLeave={() => setActiveFourthCard(false)} ref={card4Ref.ref}
          style={{
            opacity: animations.card4.opacity,
            transform: `translateY(${animations.card4.translateY}px)`,
            transition: "opacity 0.4s linear, transform 0.4s linear",
            }}>
          <img className="advantages-non-bg-image" src={GrayImage} alt="dark" />
          <p className="advantages-non-bg-title">{activeFourthCard ? content[3].activeTitle : content[3].nonActiveTitle}</p>
          <p className="advantages-non-bg-text">
            {renderTextWithBreaks(activeFourthCard ? content[3].activeText : content[3].nonActiveText)}
          </p>
          <button className="advantages-non-bg-button">Решение</button>
        </div>
        <div className="advantages-dark-gray" onMouseEnter={() => setActiveFifthCard(true)} onMouseLeave={() => setActiveFifthCard(false)} ref={card5Ref.ref}
          style={{
            opacity: animations.card5.opacity,
            transform: `translateY(${animations.card5.translateY}px)`,
            transition: "opacity 0.4s linear, transform 0.4s linear",
            }}>
          <img
            className="advantages-dark-gray-image"
            src={DarkImage}
            alt="dark"
          />
          <p className="advantages-dark-gray-title">
            {activeFifthCard ? content[4].activeTitle : content[4].nonActiveTitle}
          </p>
          <p className="advantages-dark-gray-text">
            {renderTextWithBreaks(activeFifthCard ? content[4].activeText : content[4].nonActiveText)}
          </p>
          <button className="advantages-dark-gray-button">Решение</button>
        </div>
      </div>

      
      <h2 className="advantages-bg-title" aria-label="automate.">
        {titleAnimation.letters.map((letter, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              opacity: letter.opacity,
              transform: `translateY(${letter.translateY}px)`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
              whiteSpace: 'pre', // сохраняет пробелы
            }}
          >
            {letter.char}
          </span>
        ))}
      </h2>
    </div>
  );
}
