import { user } from './user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = user(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the current user when CREATE_USER action is passed through', () => {
    const expected = {
      id: 42,
      firstName: 'Sam',
      lastName: 'Freeman',
      feeling: 'happy',
    }
    const actionObject = {
      type: 'CREATE_USER',
      user: {
        id: 42,
        firstName: 'Sam',
        lastName: 'Freeman',
        feeling: 'happy',
      }
    }
    const result = user(undefined, actionObject);

    expect(result).toEqual(expected);
  });
})