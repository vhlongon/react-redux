export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action.
    // which is an obect containing a type that describes the purpose of the action
    // and maybe data or payload that describes the action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
