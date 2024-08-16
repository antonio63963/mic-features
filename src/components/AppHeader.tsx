import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" end>To Text</NavLink>
        <NavLink to="/rec">To Rec</NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
