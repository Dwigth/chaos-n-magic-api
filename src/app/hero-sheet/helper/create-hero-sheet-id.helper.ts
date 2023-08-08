import { HeroSheetIdEnum } from 'app/hero-sheet/enums/hero-sheet-id.enum';
import ShortUniqueId from 'short-unique-id';

export function createSheetId() {
  const shortId = new ShortUniqueId({ length: 5 });
  return `${HeroSheetIdEnum.SheetId}-${shortId()}`;
}
