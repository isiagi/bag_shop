import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Na';

export default function Header(props) {
  return (
    <div>
      <header className="block row center">
      <div>
        <Link to = "/">
          <h1>MY BAGS</h1>
        </Link>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="button badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
    <Nav/>
    </div>
  );
}
