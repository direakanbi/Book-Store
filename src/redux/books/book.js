import React from 'react';
// eslint-disable-next-line import/no-cycle
import AddBooks from '../../components/addBooks';

export const clickHandler = () => {
  alert('Remove Book');
};

const Book = () => (
  <div className="books">
    <h1 className="header">List of Books</h1>
    <AddBooks />
  </div>
);

export default Book;
