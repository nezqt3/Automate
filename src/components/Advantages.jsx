import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import DarkImage from "../static/black-bubble.png";
import GrayImage from "../static/gray-bubble.png";

export default function Advantages() {
  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      console.log("Element is in view", entry?.target);
    }
  }, [inView, entry]);

  const [activeFirstCard, setActiveFirstCard] = useState(false)
  const [activeSecondCard, setActiveSecondCard] = useState(false)
  const [activeThirdCard, setActiveThirdCard] = useState(false)
  const [activeFourthCard, setActiveFourthCard] = useState(false)
  const [activeFifthCard, setActiveFifthCard] = useState(false)

  const content = [
    {
      nonActiveTitle: "Ручные операции",
      activeTitle: "Полная\nавтоматизация",
      nonActiveText: "Сотрудники тратят часы на однотипные задачи вместо важных дел",
      activeText: "Роботы выполняют рутину вместо людей 24/7 без ошибок"
    },
    {
      nonActiveTitle: "Хаос в данных",
      activeTitle: "Единая платформа",
      nonActiveText: "Информация разбросана по разным системам, нет единой картины",
      activeText: "Все данные и процессы собраны в одной системе управления\n"
    },
    {
      nonActiveTitle: "Ошибки и просрочки",
      activeTitle: "Полная\nавтоматизация",
      nonActiveText: "Человеческий фактор стоит денег и портит репутацию\n",
      activeText: "Роботы выполняют рутину вместо людей 24/7 без ошибок"
    },
    {
      nonActiveTitle: "Медленная коммуникация",
      activeTitle: "Единая платформа",
      nonActiveText: "Клиенты ждут ответа, менеджеры не успевают обрабатывать заявки",
      activeText: "Все данные и процессы собраны в одной системе управления\n"
    },
    {
      nonActiveTitle: "Невозможно масштабировать",
      activeTitle: "Полная\nавтоматизация",
      nonActiveText: "Рост количества клиентов или заказов приводит к хаосу и перегрузке",
      activeText: "Роботы выполняют рутину вместо людей 24/7 без ошибок"
    },
  ]

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
    <div className="advantages" ref={inViewRef}>
      <div className="advantages-left">
        <div className="advantages-dark-gray" onMouseEnter={() => setActiveFirstCard(true)} onMouseLeave={() => setActiveFirstCard(false)}>
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
          <div className="advantages-non-bg" onMouseEnter={() => setActiveSecondCard(true)} onMouseLeave={() => setActiveSecondCard(false)}>
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
          <div className="advantages-dark-gray" onMouseEnter={() => setActiveThirdCard(true)} onMouseLeave={() => setActiveThirdCard(false)}>
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
        <div className="advantages-non-bg" onMouseEnter={() => setActiveFourthCard(true)} onMouseLeave={() => setActiveFourthCard(false)}>
          <img className="advantages-non-bg-image" src={GrayImage} alt="dark" />
          <p className="advantages-non-bg-title">{activeFourthCard ? content[3].activeTitle : content[3].nonActiveTitle}</p>
          <p className="advantages-non-bg-text">
            {renderTextWithBreaks(activeFourthCard ? content[3].activeText : content[3].nonActiveText)}
          </p>
          <button className="advantages-non-bg-button">Решение</button>
        </div>
        <div className="advantages-dark-gray" onMouseEnter={() => setActiveFifthCard(true)} onMouseLeave={() => setActiveFifthCard(false)}>
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

      <h2 className="advantages-bg-title">automate.</h2>
    </div>
  );
}
