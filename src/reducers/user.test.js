import { user } from './user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = user(undefined, {});

    expect(result).toEqual(expected);
  });
})