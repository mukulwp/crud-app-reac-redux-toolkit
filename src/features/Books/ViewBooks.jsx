import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const ViewBooks = () => {
  const books = useSelector((state) => state.booksReducer.books)
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      dispatch(deleteBook(id));
    }
  }
  return (
    <div>
      <h2 className="mt-4 mb-3">List of Books</h2>
      <div className="container">
        <table className="table table-bordered">
          {books.length !== 0 ? (
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Name of Book</th>
                <th>Name of Author</th>
                <th>Actions</th>
              </tr>
            </thead>
          ) : (
            <thead>
              <tr className="alert alert-danger">
                <td>There is no books! Please add some books.</td>
              </tr>
            </thead>
          )}
          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author } = book;
                return (
                  <tr key={id}>
                    <td>{id < 10 ? "0" + id : id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                      <Link to="/edit" state={{id, title, author}}>
                        <button className="btn btn-info">Edit Book</button>
                      </Link>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => {
                          handleDelete(id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewBooks