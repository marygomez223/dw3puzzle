import * as ReadingListActions from './reading-list.actions';
import {
  initialState,
  readingListAdapter,
  reducer,
  State
} from './reading-list.reducer';
import { createBook, createReadingListItem } from '@tmo/shared/testing';

describe('Reading list Reducer', () => {
  describe('valid reading list actions', () => {
    let state: State;

    beforeEach(() => {
      state = readingListAdapter.setAll(
        [createReadingListItem('A'), createReadingListItem('B')],
        initialState
      );
    });

    it('loadReadingListSuccess should load books from reading list', () => {
      const list = [
        createReadingListItem('A'),
        createReadingListItem('B'),
        createReadingListItem('C')
      ];
      const action = ReadingListActions.loadReadingListSuccess({ list });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toEqual(3);
    });

    it('loadReadingListError should return error message', () => {
      const error = 'Unknown error';

      const action = ReadingListActions. loadReadingListError({ error });
  
      const result: State = reducer(initialState, action);
  
      expect(result.error).toBe(error);
       });

    it('addToReadingList should add books to the reading list', () => {
      const action = ReadingListActions.addToReadingList({
        book: createBook('C')
      });

      const result: State = reducer(state, action);

      expect(result.ids).toEqual(['A', 'B', 'C']);
    });

    it('removeFromReadingList should remove books from the reading list', () => {
      const action = ReadingListActions.removeFromReadingList({
        item: createReadingListItem('B')
      });

      const result: State = reducer(state, action);

      
      expect(result.ids).toEqual(['A','C']);

    });
    it('confirmedAddToReadingList should confirm books are added to the reading list', () => {
      const action = ReadingListActions.confirmedAddToReadingList({
        book: createBook('C')
      });

      const result: State = reducer(state, action);

      expect(result.ids).toEqual(['A', 'B', 'C']);
    });

    it('confirmedRemoveFromReadingList should confirm books are removed from the reading list', () => {
      const action = ReadingListActions.confirmedRemoveFromReadingList({
        item: createReadingListItem('B')
      });

      const result: State = reducer(state, action);

      expect(result.ids).toEqual(['A','C']);
    });
    
    it('failedAddToReadingList should undo book addition to the state', () => {
      const action = ReadingListActions.failedAddToReadingList({
        book: createBook('B')
      });

      const result: State = reducer(state, action);

      expect(result.ids).toEqual(['A','C']);
    });

    it('failedRemoveFromReadingList should undo book removal from the state', () => {
      const action = ReadingListActions.failedRemoveFromReadingList({
        item: createReadingListItem('C')
      });

      const result: State = reducer(state, action);

      expect(result.ids).toEqual(['A', 'B', 'C']);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });
});
