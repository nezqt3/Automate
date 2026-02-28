const REVIEWS = [
  {
    who: 'Илья, предприниматель',
    review: 'Теперь бизнес работает, даже когда я отдыхаю. Это лучший апгрейд за последние годы.',
  },
  {
    who: 'Дмитрий, логистическая компания',
    review:
      'Экономим 30% на административных расходах после автоматизации. Система работает без сбоев.',
  },
  {
    who: 'Анна, интернет-магазин',
    review: 'AI-ассистент сортирует заявки — конверсия выросла на 20%. Реальный результат!',
  },
  {
    who: 'Сергей, сервисный центр',
    review: 'Чат-бот отвечает за 5 секунд. Освободили ресурсы для сложных задач.',
  },
];

export default function Reviews() {
  return (
    <div className="reviews">
      <h2>Голоса клиентов</h2>
      <div className="reviews-container">
        <div className="reviews-container__card-video">
          <video
            src="../videos/video_reviews.mp4"
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
            <p className="reviews-review">
              После внедрения CRM и автоматизации маркетинга мы экономим до 15 часов в неделю.
              Всё чётко и прозрачно!
            </p>
          </div>
          <p className="reviews-company">Automate</p>
        </div>
        {REVIEWS.map((element, index) => {
          return (
            <div className="reviews-container__card" key={index}>
              <div className="reviews-container__card-top">
                <div className="reviews-who">{element.who}</div>
                <p className="reviews-review">{element.review}</p>
              </div>
              <p className="reviews-company">Automate</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
