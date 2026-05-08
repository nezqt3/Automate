import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import DarkImage from '../../../shared/assets/static/black-bubble.png';
import GrayImage from '../../../shared/assets/static/gray-bubble.png';
import { cardVariants, hoverContentVariants } from '../animation/variants';
import type { AdvantageItem } from '../model/advantages.types';

type AdvantageCardProps = {
  item: AdvantageItem;
  isActive: boolean;
  onHover: (state: boolean) => void;
  onFirstCardVisible?: () => void;
};

export function AdvantageCard({ item, isActive, onHover, onFirstCardVisible }: AdvantageCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && item.id === 1) {
      onFirstCardVisible?.();
    }
  }, [inView, item.id, onFirstCardVisible]);

  const isDark = item.variant === 'dark';

  const rootClass = isDark ? 'advantages-dark-gray' : 'advantages-non-bg';
  const imageClass = isDark ? 'advantages-dark-gray-image' : 'advantages-non-bg-image';
  const titleClass = isDark ? 'advantages-dark-gray-title' : 'advantages-non-bg-title';
  const textClass = isDark ? 'advantages-dark-gray-text' : 'advantages-non-bg-text';
  const buttonClass = isDark ? 'advantages-dark-gray-button' : 'advantages-non-bg-button';

  const image = isDark ? DarkImage : GrayImage;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 320, damping: 24 },
      }}
      className={rootClass}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <motion.img
        className={imageClass}
        src={image}
        alt=""
        animate={{
          scale: isActive ? 1.12 : 1,
          rotate: isActive ? 8 : 0,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={`title-${item.id}-${isActive ? 'active' : 'idle'}`}
          className={titleClass}
          variants={hoverContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {isActive ? item.activeTitle : item.nonActiveTitle}
        </motion.p>
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={`text-${item.id}-${isActive ? 'active' : 'idle'}`}
          className={textClass}
          variants={hoverContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {(isActive ? item.activeText : item.nonActiveText).split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < (isActive ? item.activeText : item.nonActiveText).split('\n').length - 1 && (
                <br />
              )}
            </span>
          ))}
        </motion.p>
      </AnimatePresence>

      <button className={buttonClass}>Решение</button>
    </motion.div>
  );
}
