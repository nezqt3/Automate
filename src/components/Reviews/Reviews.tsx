import './Reviews.scss';

import { type MouseEvent, useState } from 'react';

import Video from '../../shared/assets/videos/video_reviews.mp4';
import { REVIEWS } from './models/reviews.data';
import { Review, TooltipState } from './models/reviews.types';

export default function Reviews() {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    content: null,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, element: Review) => {
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
          <div>{tooltip.content?.profession}</div>
          <div>{tooltip.content?.service}</div>
        </div>
      )}
    </div>
  );
}
