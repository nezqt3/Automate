import './RequestAction.scss';

import ArrowCircle from '../../shared/assets/static/arrow-with-circle-black.svg';
import Video from '../../shared/assets/videos/video.gif';
import { AUTOMATION_OPTIONS } from './models/requestAction.data';
import { AutomationOptions } from './ui/AutomationOptions';

export default function RequestAction() {
  return (
    <div className="request-action">
      <div className="request-action__content">
        <div className="request-action__content-left">
          <img src={Video} alt="gif video" className="request-action__content-left-video" />
        </div>
        <div className="request-action__content-right">
          <AutomationOptions options={AUTOMATION_OPTIONS} />
          <h2>Начни управлять бизнесом, а&nbsp;не&nbsp;рутиной.</h2>
          <p>Построй систему, которая работает за&nbsp;тебя.</p>
          <button type="button">
            <p>Получить консультацию</p>
            <img src={ArrowCircle} alt="arrow-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
