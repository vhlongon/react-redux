export function selectBook(book) {
    console.log('a books has been selected: ' + book.title);
    return {
        type: 'SELECT_BOOK',
        book: book
    };
}
