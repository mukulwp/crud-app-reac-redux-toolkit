import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, title: "Book Title One", author: "Author One" },
        { id: 2, title: "Book Title Two", author: "Author Two" },
        { id: 3, title: "Book Title Three", author: "Author Three" },
        { id: 4, title: "Book Title Four", author: "Author Four" },
    ]
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        editBook: (state, action) => {
            const { id, title, author } = action.payload;
            const existBook = state.books.filter((book) => book.id === id);
            if (existBook) {
                existBook[0].title = title;
                existBook[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
        }
    }
});
export const { showBooks, addBook, editBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;