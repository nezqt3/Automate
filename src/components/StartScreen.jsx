import Bubble from "../static/buble-main.png";

export default function StartScreen() {
  return (
    <div className="start-screen">
      <h1 className="start-screen-title">
        ваш бизнес
        <br />
        на
        <br />
        полном
        <br />
        <span className="start-screen-title-span">автопилоте</span>
      </h1>
      <p className="start-screen-text">
        Бизнес — это не только прибыль, но и время, свобода и масштаб. Мы
        создаем умные системы, которые берут на себя рутину, устраняют ошибки и
        позволяют вам сосредоточиться на стратегическом развитии.
      </p>
      <img src={Bubble} alt="bubble-main" className="start-screen-bubble" />
    </div>
  );
}
