import type { Variants } from 'motion/react';

export const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
} satisfies Variants;

export const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
} satisfies Variants;

export const hoverContentVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.24,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: 'blur(4px)',
    transition: {
      duration: 0.16,
      ease: [0.4, 0, 1, 1],
    },
  },
} satisfies Variants;
