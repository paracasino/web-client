import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'state/store';

export interface FavoritesState {
  ids: string[];
}

export const initialState: FavoritesState = {
  ids: [],
};

export const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.ids.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = state.ids.findIndex(id => id === action.payload);
      state.ids.splice(id, id + 1);
    },
    clear: state => {
      state.ids = [];
    },
  },
});

export const { add, clear, remove } = slice.actions;
export const selectFavorites = (state: RootState) => state.favorites;
export default slice.reducer;
