import './Advantages.scss';

import { motion } from 'motion/react';

import { letterVariants } from './animation/variants';
import { useAdvantagesAnimation } from './hooks/useAdvantagesAnimation';
import { advantages } from './model/advantages.data';
import { AdvantageCard } from './ui/AdvantageCard';

export default function Advantages() {
  const { titleLetters, activeCards, animateTitle, setCardActive } = useAdvantagesAnimation();

  return (
    <section className="advantages">
      <div className="advantages-left">
        <AdvantageCard
          item={advantages[0]}
          isActive={activeCards[0]}
          onHover={(state) => setCardActive(0, state)}
          onFirstCardVisible={animateTitle}
        />

        <div className="advantages-left-down">
          {advantages.slice(1, 3).map((item) => (
            <AdvantageCard
              key={item.id}
              item={item}
              isActive={activeCards[item.id - 1]}
              onHover={(state) => setCardActive(item.id - 1, state)}
            />
          ))}
        </div>
      </div>

      <div className="advantages-right">
        {advantages.slice(3).map((item) => (
          <AdvantageCard
            key={item.id}
            item={item}
            isActive={activeCards[item.id - 1]}
            onHover={(state) => setCardActive(item.id - 1, state)}
          />
        ))}
      </div>

      <h2 className="advantages-bg-title" aria-label="automate.">
        {titleLetters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="advantages-bg-title__letter"
          >
            {letter.char}
          </motion.span>
        ))}
      </h2>
    </section>
  );
}
