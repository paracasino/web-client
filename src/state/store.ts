import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import favorites from 'state/features/favorites';

export const store = configureStore({
  reducer: {
    favorites,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
