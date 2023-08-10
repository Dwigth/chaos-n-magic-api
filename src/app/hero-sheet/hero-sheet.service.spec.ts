import { HeroSheetData } from 'app/hero-sheet/data/hero-sheet.data';
import { HeroSheetChangesDto } from 'app/hero-sheet/dtos/hero-sheet-changes.dto';
import { HeroSheetService } from 'app/hero-sheet/hero-sheet.service';
import { HeroSheet } from 'app/hero-sheet/schemas/hero-sheet.schema';
import { Model } from 'mongoose';

describe('Hero Sheet Service', () => {
  const heroSheetService = new HeroSheetService({} as Model<HeroSheet>);
  const heroSheetServiceSpy = jest.spyOn(heroSheetService, 'getHeroSheetById');
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const testThatShouldFail = [
    {
      a: {
        propertyToUpdate: ['sheetId'],
      },
      b: 'the base propertyToUpdate is the sheetId and is forbidden',
    },
    {
      a: {
        propertyToUpdate: ['sheetPasscode'],
      },
      b: 'the base propertyToUpdate is the sheetPasscode and is forbidden',
    },
    {
      a: {
        heroSheetId: 'CHAOS-N-MAGIC-SgEtc',
        index: null,
        isArray: false,
        propertyToUpdate: ['heroBasicInfo', 'bags'],
        value: 'CHAOS-N-MAGIC-Kydup',
      },
      b: 'the propertyToUpdate has an invalid path',
    },
  ];

  test.each(testThatShouldFail)(
    'Should throw error because $b',
    async ({ a }) => {
      // @ts-ignore
      heroSheetServiceSpy.mockResolvedValue(new HeroSheetData());
      await expect(
        heroSheetService.updateHeroSheet(a as HeroSheetChangesDto),
      ).rejects.toThrow();
    },
  );
});
