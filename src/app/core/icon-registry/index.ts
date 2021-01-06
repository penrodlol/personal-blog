export const ICONS = [
  'github',
  'twitter',
  'envelope',
] as const;

export type Icon = typeof ICONS[number];
