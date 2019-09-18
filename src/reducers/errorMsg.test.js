import { errorMsg } from './errorMsg';

describe('errorMsg reducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorMsg(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return error message when HAS_ERRORED action is passed through', () => {
    const expected = 'There\'s been an error!';
    const actionObject = {
      type: 'HAS_ERRORED',
      errorMsg: 'There\'s been an error!'
    }
    const result = errorMsg(undefined, actionObject);

    expect(result).toEqual(expected);
  });
})