import { BenefitItem } from './benefits.types';

export const benefitsData: BenefitItem[] = [
  {
    description: 'Сложные таблицы и хаос в данных',
    position: 'left',
    top: 15,
    left: 20,
  },
  {
    description: 'Постоянный контроль и напоминания команде',
    position: 'left',
    top: 50,
    left: 13,
  },
  {
    description: 'Ручные отчёты и потеря времени на анализ',
    position: 'left',
    top: 80,
    left: 20,
  },
  {
    title: 'Всё под контролем',
    description: 'Система берёт рутину на себя — всё хранится и обновляется автоматически.',
    position: 'right',
    top: 15,
    left: 73,
    bias: -20,
  },
  {
    title: 'Команда работает слаженно',
    description: 'Задачи распределяются и контролируются автоматически.',
    position: 'right',
    top: 50,
    left: 78,
  },
  {
    title: 'Прозрачные результаты',
    description: 'Отчёты формируются мгновенно — всё видно в один клик.',
    position: 'right',
    top: 80,
    left: 73,
    bias: 20,
  },
];
