import { createPasscodeString } from 'app/hero-sheet/helper/create-passcode.helper';

describe('create passcode number', () => {
  it('should create 5 random numbers', () => {
    expect(createPasscodeString().length).toStrictEqual(5);
  });
});
