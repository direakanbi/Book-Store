import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './book';
import { getBookFromApi } from '../redux/books/book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    dispatch(getBookFromApi());
  }, []);
  return (
    <div>
      {books.map((book) => (
        <Book
          id={book.item_id}
          key={book.item_id}
          title={book.title}
          category={book.category}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
