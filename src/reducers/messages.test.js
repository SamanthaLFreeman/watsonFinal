import { messages } from './messages';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = messages(undefined, {});
    
    expect(result).toEqual(expected);
  })

  it('should return the new state with the added message when ADD_MESSAGE action is passed through', () => {
    const expected = [
      {
        message: 'Hey Travis and Robbie',
        isUser: true
      }
    ]
    const actionObject = {
      type: 'ADD_MESSAGE',
      message: 'Hey Travis and Robbie',
      isUser: true
    }
    const result = messages(undefined, actionObject);

    expect(result).toEqual(expected);
  })

  it('should return and empty array when CLEAR_MESSAGES action is passed through', () => {
    const expected = []
    const actionObject = {
      type: 'CLEAR_MESSAGES'
    }
    const result = messages(undefined, actionObject);

    expect(result).toEqual(expected);
  })
})