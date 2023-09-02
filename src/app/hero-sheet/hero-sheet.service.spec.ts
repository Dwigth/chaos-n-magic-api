import { HeroSheetData } from 'app/hero-sheet/data/hero-sheet.data';
import { HeroSheetChangesDto } from 'app/hero-sheet/dtos/hero-sheet-changes.dto';
import { UpdateHeroSheetErrors } from 'app/hero-sheet/enums/update-hero-sheet-errors.enum';
import { HeroSheetService } from 'app/hero-sheet/hero-sheet.service';
import { HeroSheet } from 'app/hero-sheet/schemas/hero-sheet.schema';
import { Model } from 'mongoose';

describe('Hero Sheet Service', () => {
  const heroSheetService = new HeroSheetService({
    updateOne: () => {
      return {
        exec: () => {},
      };
    },
  } as unknown as Model<HeroSheet>);
  const getHeroSheetById = jest
    .spyOn(heroSheetService, 'getHeroSheetById')
    // we ignore because we want to simplify the test
    // @ts-ignore
    .mockResolvedValue(new HeroSheetData());

  beforeEach(() => {
    jest.clearAllMocks();
  });

  type HeroSheetUpdateShouldFailCase = {
    a: Partial<HeroSheetChangesDto>;
    b: string;
  };
  describe('Update Hero Sheet', () => {
    const testThatShouldFail: HeroSheetUpdateShouldFailCase[] = [
      {
        a: {
          propertyToUpdate: [],
        },
        b: UpdateHeroSheetErrors.InvalidPropertyPath,
      },
    ];

    test.each(testThatShouldFail)(
      'Should throw error because $b',
      async ({ a, b }) => {
        await expect(
          heroSheetService.updateHeroSheet(a as HeroSheetChangesDto),
        ).rejects.toThrowError(b);
      },
    );

    test('Should update an element in an object', async () => {
      expect(
        await heroSheetService.updateHeroSheet({
          heroSheetId: 'CHAOS-N-MAGIC-SgEtc',
          propertyToUpdate: ['heroBasicInfo', 'defense', 'min'],
          value: 5,
        }),
      ).toStrictEqual('The hero sheet has been updated.');
    });

    test('Should insert an element in an array', async () => {
      expect(
        await heroSheetService.updateHeroSheet({
          heroSheetId: 'CHAOS-N-MAGIC-SgEtc',
          propertyToUpdate: ['heroBasicInfo', 'languages', '2'],
          value: 'ru',
        }),
      ).toStrictEqual('The hero sheet has been updated.');
    });
  });
});
