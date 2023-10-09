**Code Smells**

1. book-search.component.html  uses form as the search option it uses submit button to submit the  form  but as it is reactive form the best practice is to use ngSubmit which provides form validation before sending the request, so changed from "submit" to "ngSubmit".

2. Custom method is used for formatting the date in the book-search.component.html.Angular pipes are the alternative used to format date  which improves the performance by evaluating only once. Here the method is replaced by built in date pipe.

3. "innerHTML" is used to display the description of books in book-search.component.html.It is unprotected way of handling data which may cause threats .The  best way of displaying description can be done using string interpolation. 

4. book-search.component.ts has "this.store.select(getAllBooks)" which is not unsubscribed, which may cause potential memory leaks .Hence async pipe is added in the template which unsubscribes as the component is destroyed.

5. Fixed the testcases for reading-list.reducer.spec.ts by adding the implementations for failedAddToReadingList and failedRemoveFromReadingList in reducer.

6. Variable name changed "let b of (books$|async)" to "let book of (books$|async)" for search book in the book-search.component.html as well  as name changed for  the variable to access reading list in reading-list.component.html.

**Accessibility**

Lighthouse Report:

 1. Buttons do not have accessible name.It is fixed by adding "aria-label" attribute
 
 2. Increased text colour from gray40 to gray80 so that contrast ratio between foreground and background colours will be adjusted.

**Manually Detected:**

1. Added "alt" attribute for img tags to provide alternate text if the image fails to load.It is added in book-search.component.html and reading-list.component.html files.

2. Added darker effects for "reading list" and and "want to read "so that it will provide hover effect to the buttons.

 