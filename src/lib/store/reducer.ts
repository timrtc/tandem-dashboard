import { ActionType, AppState } from 'lib/common';

export const initialState: AppState = {
  data: [],
  url: 'data-1234.json',
};

/**
 * Reducer manages updates to global application state.
 *
 * @export
 * @param {AppState} state
 * @param {ActionType} action
 * @returns {AppState}
 */
export function appReducer(state: AppState, action: ActionType): AppState {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        ...state,
        data: [...state.data, action.number],
      };

    case 'SET_DATA':
      return {
        ...state,
        data: action.data,
      };

    case 'SET_URL':
      return {
        ...state,
        url: action.url,
      };

    default:
      return state;
  }
}
