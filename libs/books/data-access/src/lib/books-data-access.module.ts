import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBooks from '../../../feature/src/lib/book-search/books.reducer';
import { BooksEffects } from '../../../feature/src/lib/book-search/books.effects';
import * as fromReadingList from '../../../feature/src/lib/reading-list/reading-list.reducer';
import { ReadingListEffects } from '../../../feature/src/lib/reading-list/reading-list.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBooks.BOOKS_FEATURE_KEY, fromBooks.reducer),
    StoreModule.forFeature(
      fromReadingList.READING_LIST_FEATURE_KEY,
      fromReadingList.reducer
    ),
    EffectsModule.forFeature([BooksEffects, ReadingListEffects])
  ]
})
export class BooksDataAccessModule {}
