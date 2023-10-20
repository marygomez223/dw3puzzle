**Code Smells**

1. book-search.component.html  uses form as the search option it uses submit button to submit the  form  but as it is reactive form the best practice is to use ngSubmit which provides form validation before sending the request, so changed from "submit" to "ngSubmit".

2. Custom method is used for formatting the date in the book-search.component.html.Angular pipes are the alternatives used to format date that improves the performance by evaluating only once. Hence the method is replaced by built-in date pipe.

3. "[innerHTML]" is used to display the description of books in book-search.component.html.It is unprotected way of handling data which may cause threats like Cross Site Scripting Security.The best way of displaying description can be done using by domSanitizer which helps by sanitizing values to be safe to use in the different DOM contexts .

4. book-search.component.ts has "this.store.select(getAllBooks)" which is not unsubscribed, which may cause potential memory leaks .Hence subscribe is removed and async pipe is added in the template which unsubscribes as the component is destroyed.

5. Fixed the testcases for reading-list.reducer.spec.ts and reading-list.effect.spec.ts

6. Variable name changed "let b of (books$|async)" to "let book of (books$|async)" for search book in the book-search.component.html.

7. Variable name changed "let b of (readingList$|async)" to "let item of (readingList$|async)" for reading list in the reading-list.component.html.

8. The method "get searchTerm()" is removed from the book-search.component.ts file because the search term value can be accessed by value change event.

9. Fixed the testcases for books.reducer.spec.ts

10. Listed out all the actions in the reducer in ngrx files for reading list.

11.Added a constant file so that api calls given in  reading-list.effect.spec.ts and  books.effect.spec.ts is given as a constant variable.

**Accessibility**

Lighthouse Report:

 1. Buttons do not have accessible name.It is fixed by adding "aria-label" attribute
 
 2. Increased text colour from gray40 to gray80 so that contrast ratio between foreground and background colours will be adjusted.

**Manually Detected:**

1. Added "alt" attribute for img tags to provide alternate text if the image fails to load.It is added in book-search.component.html and reading-list.component.html files.

2. Added darker effects for "reading list" and and "want to read "so that it will provide hover effect to the buttons.

 
