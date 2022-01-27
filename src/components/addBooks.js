import React from 'react';
import Button from './buttons';
// eslint-disable-next-line import/no-cycle
import { clickHandler } from '../redux/books/book';

const AddBooks = () => (
  <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 100 }}>
    <input placeholder="ADD NEW BOOK" className="input" />
    <input placeholder="ADD BOOKS AUTHOR" className="input" />
    <select name="books" className="selector">
      <option value="Withered By The Wind">Withered By the Wind</option>
      <option value="Silent">Silent</option>
      <option value="A Thousand Heavens">A Thousand Heavens</option>
      <option value="Shortened">Shortened</option>
    </select>
    <Button click={clickHandler} value="Remove Book" />
  </div>
);

export default AddBooks;
