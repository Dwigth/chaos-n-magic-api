import { Prop } from '@nestjs/mongoose';
import { SpellbookMagic } from 'app/hero-sheet/schemas/spellbook-magic.schema';
import { SpellbookInfo } from 'app/hero-sheet/types/spellbook-info.type';

export class Spellbook {
  @Prop([String])
  magicSchools: string[];

  @Prop([{ type: SpellbookMagic }])
  minorMagic: SpellbookInfo[];

  @Prop([{ type: SpellbookMagic }])
  initiateMagic: SpellbookInfo[];

  @Prop([{ type: SpellbookMagic }])
  professionalMagic: SpellbookInfo[];

  @Prop([{ type: SpellbookMagic }])
  masterMagic: SpellbookInfo[];
}
