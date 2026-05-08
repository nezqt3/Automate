import type { AdvantageItem } from './advantages.types';

export const advantages: AdvantageItem[] = [
  {
    id: 1,
    variant: 'dark',
    nonActiveTitle: 'Ручные операции',
    activeTitle: 'Полная\nавтоматизация',
    nonActiveText: 'Сотрудники тратят часы на однотипные задачи вместо важных дел',
    activeText: 'Роботы выполняют рутину вместо людей 24/7 без ошибок',
  },
  {
    id: 2,
    variant: 'light',
    nonActiveTitle: 'Хаос в данных',
    activeTitle: 'Единая платформа',
    nonActiveText: 'Информация разбросана по разным системам, нет единой картины',
    activeText: 'Все данные и процессы собраны в одной системе управления',
  },
  {
    id: 3,
    variant: 'dark',
    nonActiveTitle: 'Ошибки и просрочки',
    activeTitle: 'Контроль процессов',
    nonActiveText: 'Человеческий фактор стоит денег и портит репутацию',
    activeText: 'Система отслеживает сроки, ошибки и узкие места автоматически',
  },
  {
    id: 4,
    variant: 'light',
    nonActiveTitle: 'Медленная коммуникация',
    activeTitle: 'Быстрые ответы',
    nonActiveText: 'Клиенты ждут ответа, менеджеры не успевают обрабатывать заявки',
    activeText: 'Заявки обрабатываются быстрее через единый цифровой поток',
  },
  {
    id: 5,
    variant: 'dark',
    nonActiveTitle: 'Невозможно масштабировать',
    activeTitle: 'Гибкое масштабирование',
    nonActiveText: 'Рост количества клиентов или заказов приводит к хаосу и перегрузке',
    activeText: 'Система выдерживает рост нагрузки без потери управляемости',
  },
];
