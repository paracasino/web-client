import reducer, { add, clear, FavoritesState, remove } from '.';

describe('favorites reducer', () => {
  const initialState: FavoritesState = {
    ids: ['123', '456', '987'],
  };

  it('add', () => {
    expect(reducer(initialState, add('abc')))
      .toEqual({ ids: ['123', '456', '987', 'abc'] });
  });

  it('remove', () => {
    expect(reducer(initialState, remove('123')))
      .toEqual({ ids: ['456', '987'] });
  });

  it('clear', () => {
    expect(reducer(initialState, clear()))
      .toEqual({ ids: [] });
  });
});
