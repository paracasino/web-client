import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { findIndex } from 'lodash';
import { RootState } from 'state/store';

interface FavoritesState {
  ids: string[];
}

const initialState: FavoritesState = {
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
      const { ids } = state;
      const id = findIndex(ids, action.payload);
      ids.slice(id, id + 1);
    },
    clear: state => {
      state.ids = [];
    },
  },
});

export const { add, clear, remove } = slice.actions;
export const selectFavorites = (state: RootState) => state.favorites;
export default slice.reducer;
