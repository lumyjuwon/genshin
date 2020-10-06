import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import Wishes from '../pages/wishes';

export default function Header() {
  const Header = styled.header`
    padding: 20px 200px;
    font-size: 30px;
    border-bottom: 1px solid #515253;
    background-color: #111213;
  `
  const Inner = styled.div`
    display: flex;
  `

  const NavBar = styled.ul`
    display: flex;
    align-items: center;
    // float didn't work..
    float: right;
  `

  const NavLink = styled.li`
    margin-left: 20px;
  `

  return (
    <Header>
      <BrowserRouter>
        <Inner>
          <div className="header-title">
            <Link to="/">Home</Link>
          </div>
          <NavBar>
            <NavLink>
              <Link to="/wishes">Wishes</Link>
            </NavLink>
            <NavLink>
              <Link to="#">Weapon</Link>
            </NavLink>
          </NavBar>
        </Inner>
      </BrowserRouter>
    </Header>
  )
}