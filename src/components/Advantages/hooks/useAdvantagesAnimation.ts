import { useState } from 'react';

type AnimatedLetter = {
  char: string;
  delay: number;
};

export function useAdvantagesAnimation() {
  const [titleLetters, setTitleLetters] = useState<AnimatedLetter[]>([]);
  const [isTitleAnimated, setIsTitleAnimated] = useState(false);
  const [activeCards, setActiveCards] = useState<boolean[]>([false, false, false, false, false]);

  const animateTitle = () => {
    if (isTitleAnimated) {
      return;
    }

    const letters = 'automate.'.split('').map((char, index) => ({
      char,
      delay: index * 0.05,
    }));

    setTitleLetters(letters);
    setIsTitleAnimated(true);
  };

  const setCardActive = (index: number, state: boolean) => {
    setActiveCards((prev) => {
      const copy = [...prev];
      copy[index] = state;
      return copy;
    });
  };

  return {
    titleLetters,
    activeCards,
    animateTitle,
    setCardActive,
  };
}
