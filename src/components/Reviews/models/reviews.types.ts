import { REVIEWS } from './reviews.data';

export type ReviewItem = {
  who: string;
  review: string;
  profession: string;
  service: string;
};

export type Review = (typeof REVIEWS)[number];

export type TooltipState = {
  visible: boolean;
  x: number;
  y: number;
  content: Review | null;
};
