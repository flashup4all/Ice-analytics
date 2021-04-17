import React from 'react';
// PHOTO
import logo from '../../images/logo.svg';
import useAppCtx from '../hooks/useAppCtx';

const Header = () => {
  const {open} = useAppCtx ();
  return (
    <header className="header_main bg-w">
      <nav className="header_nav container-max flexi box">

        <div className="menu mr-2">
          <span className="hamburger" onClick={open} />
        </div>
        <div className="box_heading header_branding">
          <img src={logo} alt="logo" />
        </div>

      </nav>

    </header>
  );
};

export default Header;
