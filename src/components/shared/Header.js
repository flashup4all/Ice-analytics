import React from 'react';
// PHOTO
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header class="header_main bg-w">
      <nav className="header_nav container-max sp-btw flexi box">

        <div className="box_heading header_branding">
          <img src={logo} alt="logo" />
        </div>

      </nav>

    </header>
  );
};

export default Header;
