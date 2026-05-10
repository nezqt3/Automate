export const POSITIONS = ['left', 'right'];

export type Position = (typeof POSITIONS)[number];

export type BenefitItem = {
  title?: string;
  description: string;
  position: Position;
  top: number;
  left: number;
  bias?: number;
};
