import { ExamplesEnum } from 'app/hero-sheet/enums/examples.enum';
import { Spellbook } from 'app/hero-sheet/types/spellbook.type';

export const exampleSpellbooks = new Map<string, Spellbook>([
  [
    ExamplesEnum.SwaggerExample,
    {
      name: '',
      cost: 0,
      time: 2,
      range: '',
      target: '',
      duration: '',
      channeling: 0,
      ad: '1dcm',
      damage: '',
      description: '',
      hasAttack: {
        name: '',
        damage: '1dcm',
        damageType: 'P',
        energy: 3,
      },
    },
  ],
]);
