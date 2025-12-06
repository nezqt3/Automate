import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import DarkImage from "../static/black-bubble.png";
import GrayImage from "../static/gray-bubble.png";

export default function Advantages() {
  const [titleAnimation, setTitleAnimation] = useState({
    letters: [],
    isAnimated: false,
  });

  const [activeCards, setActiveCards] = useState([false, false, false, false, false]);

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

  const renderTextWithBreaks = (text) =>
    text.split("\n").map((line, index, array) =>
      line === "" ? (
        <br key={`empty-${index}`} />
      ) : (
        <span key={index}>
          {line}
          {index < array.length - 1 && <br />}
        </span>
      )
    );

  // Отдельные refs для каждой карточки
  const card1Ref = useInView({ threshold: 0.2, triggerOnce: true });
  const card2Ref = useInView({ threshold: 0.2, triggerOnce: true });
  const card3Ref = useInView({ threshold: 0.2, triggerOnce: true });
  const card4Ref = useInView({ threshold: 0.2, triggerOnce: true });
  const card5Ref = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (card1Ref.inView && !titleAnimation.isAnimated) {
      const text = "automate.";
      const letters = text.split("").map((char, index) => ({
        char,
        delay: index * 0.05,
      }));
      setTitleAnimation({ letters, isAnimated: true });
    }
  }, [card1Ref.inView, titleAnimation.isAnimated]);

  const handleMouse = (index, state) => {
    setActiveCards((prev) => {
      const copy = [...prev];
      copy[index] = state;
      return copy;
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <div className="advantages">
      <div className="advantages-left">
        <motion.div
          ref={card1Ref.ref}
          initial="hidden"
          animate={card1Ref.inView ? "visible" : "hidden"}
          variants={cardVariants}
          className="advantages-dark-gray"
          onMouseEnter={() => handleMouse(0, true)}
          onMouseLeave={() => handleMouse(0, false)}
        >
          <img className="advantages-dark-gray-image" src={DarkImage} alt="dark" />
          <span>
            <p className="advantages-dark-gray-title">
              {activeCards[0] ? content[0].activeTitle : content[0].nonActiveTitle}
            </p>
            <p className="advantages-dark-gray-text">
              {activeCards[0] ? content[0].activeText : content[0].nonActiveText}
            </p>
          </span>
          <button className="advantages-dark-gray-button">Решение</button>
        </motion.div>

        <div className="advantages-left-down">
          <motion.div
            ref={card2Ref.ref}
            initial="hidden"
            animate={card2Ref.inView ? "visible" : "hidden"}
            variants={cardVariants}
            className="advantages-non-bg"
            onMouseEnter={() => handleMouse(1, true)}
            onMouseLeave={() => handleMouse(1, false)}
          >
            <img className="advantages-non-bg-image" src={GrayImage} alt="gray" />
            <p className="advantages-non-bg-title">
              {activeCards[1] ? content[1].activeTitle : content[1].nonActiveTitle}
            </p>
            <p className="advantages-non-bg-text">
              {activeCards[1]
                ? renderTextWithBreaks(content[1].activeText)
                : renderTextWithBreaks(content[1].nonActiveText)}
            </p>
            <button className="advantages-non-bg-button">Решение</button>
          </motion.div>

          <motion.div
            ref={card3Ref.ref}
            initial="hidden"
            animate={card3Ref.inView ? "visible" : "hidden"}
            variants={cardVariants}
            className="advantages-dark-gray"
            onMouseEnter={() => handleMouse(2, true)}
            onMouseLeave={() => handleMouse(2, false)}
          >
            <img className="advantages-dark-gray-image" src={DarkImage} alt="dark" />
            <p className="advantages-dark-gray-title">
              {activeCards[2] ? content[2].activeTitle : content[2].nonActiveTitle}
            </p>
            <p className="advantages-dark-gray-text">
              {activeCards[2]
                ? renderTextWithBreaks(content[2].activeText)
                : renderTextWithBreaks(content[2].nonActiveText)}
            </p>
            <button className="advantages-dark-gray-button">Решение</button>
          </motion.div>
        </div>
      </div>

      <div className="advantages-right">
        <motion.div
          ref={card4Ref.ref}
          initial="hidden"
          animate={card4Ref.inView ? "visible" : "hidden"}
          variants={cardVariants}
          className="advantages-non-bg"
          onMouseEnter={() => handleMouse(3, true)}
          onMouseLeave={() => handleMouse(3, false)}
        >
          <img className="advantages-non-bg-image" src={GrayImage} alt="gray" />
          <p className="advantages-non-bg-title">
            {activeCards[3] ? content[3].activeTitle : content[3].nonActiveTitle}
          </p>
          <p className="advantages-non-bg-text">
            {activeCards[3]
              ? renderTextWithBreaks(content[3].activeText)
              : renderTextWithBreaks(content[3].nonActiveText)}
          </p>
          <button className="advantages-non-bg-button">Решение</button>
        </motion.div>

        <motion.div
          ref={card5Ref.ref}
          initial="hidden"
          animate={card5Ref.inView ? "visible" : "hidden"}
          variants={cardVariants}
          className="advantages-dark-gray"
          onMouseEnter={() => handleMouse(4, true)}
          onMouseLeave={() => handleMouse(4, false)}
        >
          <img className="advantages-dark-gray-image" src={DarkImage} alt="dark" />
          <p className="advantages-dark-gray-title">
            {activeCards[4] ? content[4].activeTitle : content[4].nonActiveTitle}
          </p>
          <p className="advantages-dark-gray-text">
            {activeCards[4]
              ? renderTextWithBreaks(content[4].activeText)
              : renderTextWithBreaks(content[4].nonActiveText)}
          </p>
          <button className="advantages-dark-gray-button">Решение</button>
        </motion.div>
      </div>

      <h2 className="advantages-bg-title" aria-label="automate.">
        {titleAnimation.letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {letter.char}
          </motion.span>
        ))}
      </h2>
    </div>
  );
}
