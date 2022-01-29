import { Link } from 'react-router-dom';
import id from './C16A2340-7BE6-4ACE-88D5-E6DF9E85165C.png';
 const Nav = () => (
  <div className="nav">
    <nav className="same">
      <h1 className="heading">Bookstore CMS</h1>
       <ul className="nav-link">
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
       </ul>
     </nav>
    <img src={id} alt="id" width="40px" height="40px" />
  </div>
);

export default Nav;
