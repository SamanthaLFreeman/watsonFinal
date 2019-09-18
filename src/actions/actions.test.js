import * as actions from './index';

describe('actions', () => {
  it('should have a type of CREATE_USER,', () => {
    const mockUser = {
      id: 42,
      firstName: 'Sam',
      lastName: 'Freeman',
      feeling: 'happy',
    }
    const expectedAction = {
      type: 'CREATE_USER',
      user: mockUser
    }

    const result = actions.createUser(mockUser);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_MESSAGE,', () => {
    const mockMessage = 'Hey Travis and Robbie';
    const mockisUser = true;
    const expectedAction = {
      type: 'ADD_MESSAGE',
      message: 'Hey Travis and Robbie',
      isUser: true
    }

    const result = actions.addMessage(mockMessage, mockisUser);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_MESSAGES,', () => {
    const expectedAction = {
      type: 'CLEAR_MESSAGES'
    }

    const result = actions.clearMessages();

    expect(result).toEqual(expectedAction);
  });
})