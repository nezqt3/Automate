import './Header.scss';

import { motion, type Variants } from 'motion/react';

const navigationElements = [
  { text: 'Главная', target: 'start-screen' },
  { text: 'Решения', target: 'decisions' },
  { text: 'Кейсы', target: '' },
  { text: 'О нас', target: '' },
  { text: 'Контакты', target: '' },
];

export default function Header() {
  const handleNavigationClick = (target: string) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({
        behavior: 'auto',
      });
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  } satisfies Variants;

  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  } satisfies Variants;

  return (
    <motion.div className="header" initial="hidden" animate="visible" variants={headerVariants}>
      <p className="header-logo">automate.</p>

      <nav className="header-navigation">
        {navigationElements.map((elem, id) => (
          <motion.p
            key={id}
            className="header-navigation-text"
            custom={id}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            onClick={() => handleNavigationClick(elem.target)}
          >
            {elem.text}
          </motion.p>
        ))}
      </nav>

      <motion.button
        className="header-button"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Бесплатная консультация
      </motion.button>
    </motion.div>
  );
}
