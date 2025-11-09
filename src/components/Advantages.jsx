import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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

  return (
    <div className="advantages" ref={inViewRef}>
      <div className="advantages-left">
        <div className="advantages-dark-gray">
          <img
            className="advantages-dark-gray-image"
            src={DarkImage}
            alt="dark"
          />
          <p className="advantages-dark-gray-title">Полная автоматизация</p>
          <p className="advantages-dark-gray-text">
            Роботы выполняют рутину вместо людей 24/7 без ошибок
          </p>
          <button className="advantages-dark-gray-button">Решение</button>
        </div>
        <div className="advantages-left-down">
          <div className="advantages-non-bg">
            <img
              className="advantages-non-bg-image"
              src={GrayImage}
              alt="dark"
            />
            <p className="advantages-non-bg-title">Хаос в данных</p>
            <p className="advantages-non-bg-text">
              Информация разбросана по разным системам, нет единой картины
            </p>
            <button className="advantages-non-bg-button">Решение</button>
          </div>
          <div className="advantages-dark-gray">
            <img
              className="advantages-dark-gray-image"
              src={DarkImage}
              alt="dark"
            />
            <p className="advantages-dark-gray-title">Ошибки и просрочки</p>
            <p className="advantages-dark-gray-text">
              Человеческий фактор стоит денег и портит репутацию
            </p>
            <button className="advantages-dark-gray-button">Решение</button>
          </div>
        </div>
      </div>
      <div className="advantages-right">
        <div className="advantages-non-bg">
          <img className="advantages-non-bg-image" src={GrayImage} alt="dark" />
          <p className="advantages-non-bg-title">Медленная коммуникация</p>
          <p className="advantages-non-bg-text">
            Клиенты ждут ответа, менеджеры не успевают обрабатывать заявки
          </p>
          <button className="advantages-non-bg-button">Решение</button>
        </div>
        <div className="advantages-dark-gray">
          <img
            className="advantages-dark-gray-image"
            src={DarkImage}
            alt="dark"
          />
          <p className="advantages-dark-gray-title">
            Невозможно масштабировать
          </p>
          <p className="advantages-dark-gray-text">
            Рост количества клиентов или заказов приводит к хаосу и перегрузке
          </p>
          <button className="advantages-dark-gray-button">Решение</button>
        </div>
      </div>

      <h2 className="advantages-bg-title">automate.</h2>
    </div>
  );
}
