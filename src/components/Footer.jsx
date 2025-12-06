export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-header">
        <h2 className="footer-header__title">AUTOMATE</h2>
        <h2 className="footer-header__title-under">AUTOMATE</h2>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <h3>
            Automate — ваш партнёр в<br /> цифровой эффективности.
          </h3>
          <p>Напишите свой номер для консультации</p>
          <input />
          <button>Отправить</button>
        </div>

        <div className="footer-bottom-right">
          <div>
            <h4>НАВИГАЦИЯ</h4>
            <p>ГЛАВНАЯ</p>
            <p>УСЛУГИ</p>
            <p>КЕЙСЫ</p>
            <p>БЛОГ</p>
          </div>
          <div>
            <h4>УСЛУГИ</h4>
            <p>БИЗНЕС-АНАЛИЗ</p>
            <p>ВНЕДРЕНИЕ CRM</p>
            <p>АВТОМАТИЗАЦИЯ</p>
            <p>АУДИТ</p>
          </div>
          <div>
            <h4>КОНТАКТЫ</h4>
            <p>VK</p>
            <p>TELEGRAM</p>
            <p>YOUTUBE</p>
            <p>+ 7 918 603 09 67</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
