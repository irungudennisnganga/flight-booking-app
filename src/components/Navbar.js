import React from 'react';
import './Navbar.css'

function NavBar() {
    return (
      <nav>
        <ul>
          <li><a href='/flight'>Flight</a></li>
          <li><a href='/booking'>Booking</a></li>
          <li><a href='/TermsAndCondition'>TermsAndCondition</a></li>
        </ul>
      </nav>
    );
  }
  export default NavBar;