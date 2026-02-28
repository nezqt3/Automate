import { useState } from 'react';

import Video from '../videos/video_reviews.mp4';

const REVIEWS = [
  {
    who: 'Илья, предприниматель',
    review: 'Теперь бизнес работает, даже когда я отдыхаю. Это лучший апгрейд за последние годы.',
    profession: 'Предприниматель',
    service: 'Автоматизация бизнеса',
  },
  {
    who: 'Дмитрий, логистическая компания',
    review:
      'Экономим 30% на административных расходах после автоматизации. Система работает без сбоев.',
    profession: 'Логист',
    service: 'Оптимизация процессов',
  },
  {
    who: 'Анна, интернет-магазин',
    review: 'AI-ассистент сортирует заявки — конверсия выросла на 20%. Реальный результат!',
    profession: 'Владелец интернет-магазина',
    service: 'AI-ассистент для продаж',
  },
  {
    who: 'Сергей, сервисный центр',
    review: 'Чат-бот отвечает за 5 секунд. Освободили ресурсы для сложных задач.',
    profession: 'Руководитель сервисного центра',
    service: 'Чат-бот для поддержки клиентов',
  },
];

export default function Reviews() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: null });

  const handleMouseMove = (e, element) => {
    setTooltip({
      visible: true,
      x: e.clientX + 15, // отступ от курсора
      y: e.clientY + 15,
      content: element,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="reviews">
      <h2>Голоса клиентов</h2>
      <div className="reviews-container">
        <div className="reviews-container__card-video">
          <video
            src={Video}
            className="reviews-container__card-video__bg"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="reviews-container__card-top">
            <div>
              <div className="reviews-who">Екатерина</div>
              <div className="reviews-who">Основатель агентства</div>
            </div>
            <p className="reviews-review reviews-review--video">
              После внедрения CRM и автоматизации маркетинга мы экономим до 15 часов в неделю. Всё
              чётко и прозрачно!
            </p>
          </div>
          <p className="reviews-company reviews-company--video">Automate</p>
        </div>
        {REVIEWS.map((element, index) => {
          return (
            <div
              className="reviews-container__card"
              key={index}
              onMouseMove={(e) => handleMouseMove(e, element)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="reviews-container__card-top">
                <div className="reviews-who">{element.who}</div>
                <p className="reviews-review">{element.review}</p>
              </div>
              <p className="reviews-company">Automate</p>
            </div>
          );
        })}
      </div>
      {tooltip.visible && (
        <div className="reviews-tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
          <div style={{ fontWeight: 600 }}>{tooltip.content.profession}</div>
          <div>{tooltip.content.service}</div>
        </div>
      )}
    </div>
  );
}
