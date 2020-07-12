import { appReducer } from './reducer';
import { AppState } from 'lib/common';

describe('appReducer', () => {
  let state: AppState;

  beforeEach(() => {
    state = {
      data: [1, 2, 3, 4],
      url: 'data-1234.json',
    };
  });

  it('should add a number to the data set', () => {
    const newState = appReducer(state, {
      type: 'ADD_NUMBER',
      number: 42,
    });

    expect(newState.data).toEqual([1, 2, 3, 4, 42]);
  });

  it('should replace the data set', () => {
    const newState = appReducer(state, {
      type: 'SET_DATA',
      data: [4, 5, 6, 7, 8],
    });

    expect(newState.data).toEqual([4, 5, 6, 7, 8]);
  });

  it('should set the url', () => {
    const newState = appReducer(state, {
      type: 'SET_URL',
      url: 'data-4321.json',
    });

    expect(newState.url).toEqual('data-4321.json');
  });
});
