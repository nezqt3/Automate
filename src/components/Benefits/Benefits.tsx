import './Benefits.scss';

import Circle from '../../shared/assets/static/circle-info.svg';
import Bubble from '../../shared/assets/static/soap-bubble-28.png';
import { benefitsData } from './models/benefits.data';

export default function Benefits() {
  return (
    <div className="benefits">
      <h2 className="benefits__title">
        Из хаоса - <span>в систему</span>
      </h2>

      <div className="benefits__container">
        <img alt="big-circle" src={Circle} className="benefits__circle" />
        <img alt="big-buble" src={Bubble} className="benefits__bubble" />

        {benefitsData.map((item, index) => (
          <div
            className="benefits__item"
            key={index}
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              width: item.position === 'right' ? '250px' : '123px',
              textAlign: item.position === 'right' ? 'left' : 'center',
            }}
          >
            {item.title && (
              <h3 style={{ transform: `translateX(${item.bias}px)` }}>{item.title}</h3>
            )}
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
