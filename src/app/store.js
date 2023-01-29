import { configureStore } from "@reduxjs/toolkit";
import  booksReducer from "../features/Books/BooksSlice";

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
    }
});
export default store;