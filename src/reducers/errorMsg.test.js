import { errorMsg } from './errorMsg';

describe('errorMsg reducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorMsg(undefined, {});

    expect(result).toEqual(expected);
  });

})