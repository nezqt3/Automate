export default function Header() {
  return (
    <div className="header">
      <p className="header-logo">automate.</p>

      <nav className="header-navigation">
        <p className="header-navigation-text">Главная</p>
        <p className="header-navigation-text">Решения</p>
        <p className="header-navigation-text">Кейсы</p>
        <p className="header-navigation-text">О нас</p>
        <p className="header-navigation-text">Контакты</p>
      </nav>

      <button className="header-button">Бесплатная консультация</button>
    </div>
  );
}
