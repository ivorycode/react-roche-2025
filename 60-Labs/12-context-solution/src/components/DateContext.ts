import {createContext} from 'react';

interface DateContextState {
  date: Date;
  update: () => void
}

export const DateContext = createContext<DateContextState>({date: new Date(), update: () => {}});