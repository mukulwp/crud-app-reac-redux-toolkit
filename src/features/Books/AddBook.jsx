import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [titleError, setTitleError] = useState("");
  const [authorError, setAuthorError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const numberofBooks = useSelector((state) => state.booksReducer.books.length);

  const handleAddSubmit = (e) => {
    e.preventDefault();

    !title ? setTitleError("The title of book is required!") : setTitleError("");
    !author ? setAuthorError("The author of book is required!") : setAuthorError("");

    if (!title || !author) {
      return false
    }
    const book = { id: numberofBooks + 1, title, author };
    dispatch(addBook(book));
    navigate("/show");
  }
  return (
    <div>
      <h2 className="mt-4 mb-3">Add Book</h2>
      <form
        onSubmit={handleAddSubmit}
        className="w-50 mx-auto text-lg-start card p-4 "
      >
        <div className="form-group">
          <label htmlFor="title">Title of Book</label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Title of Book"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <p className="text-danger">{titleError}</p>

        <div className="form-group mt-3">
          <label htmlFor="author">Name of Author</label>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Name of Author"
            id="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <p className="text-danger">{authorError}</p>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mt-3">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook