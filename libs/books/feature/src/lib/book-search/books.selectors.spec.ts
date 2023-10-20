import { booksAdapter, initialState } from './books.reducer';
import * as BooksSelectors from './books.selectors';
import { createBook } from '@tmo/shared/testing';

describe('Books Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      books: booksAdapter.addMany(
        [createBook('A'), createBook('B'), createBook('C')],
        {
          ...initialState,
          error: 'Unknown error',
          loaded: true
        }
      )
    };
  });

  describe('Books Selectors', () => {
    it('getBooks() should return the list of Books', () => {
      const results = BooksSelectors.getBooks(state);

      expect(results.length).toBe(3);
      expect(results.map(x => x.id)).toEqual(['A', 'B', 'C']);
    });

     });
});
