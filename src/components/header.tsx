import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>

      <BrowserRouter>
        <div className="link-section">
          <ul>
            <li className="link-home">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Character</Link>
            </li>
            <li>
              <Link to="/">Weapon</Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
      
    </header>
  )
}