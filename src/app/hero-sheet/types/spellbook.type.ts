import { AttackInfo } from 'app/hero-sheet/types/attack-info.type';

export type Spellbook = {
  name: string;
  cost: number;
  time: number;
  range: string;
  target: string;
  duration: string;
  channeling: number;
  ad: string;
  damage: string;
  description: string;
  hasAttack: AttackInfo;
};
