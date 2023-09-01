import { createSheetId } from 'app/hero-sheet/helper/create-hero-sheet-id.helper';

describe('Create Hero Sheet Id Helper', () => {
  it('Should create a unique id', () => {
    expect(createSheetId()).toHaveLength(19);
  });
});
