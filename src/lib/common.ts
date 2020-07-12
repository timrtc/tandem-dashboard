export interface AppState {
  data: number[];
  url: DataSetUrl;
}

export type DataSetUrl = 'data-1234.json' | 'data-4321.json';

export type ActionType =
  | { type: 'ADD_NUMBER'; number: number }
  | { type: 'SET_DATA'; data: number[] }
  | { type: 'SET_URL'; url: DataSetUrl };
