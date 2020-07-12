import { useContext } from 'react';
import { store } from 'lib/store';

export default function useAppState() {
  const context = useContext(store);
  return { ...context };
}
