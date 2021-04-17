import React from 'react';
import {NavLink} from 'react-router-dom';

const SidebarLink = ({text, image, to, clickHandler}) => {
  return (
    <li className="sidebar_list_item">
      <NavLink
        activeClassName="active"
        to={to}
        className={`sidebar_link btn_plain cap flexi bg-g-2`}
        onClick={clickHandler}
      >
        <svg className="small_svg mr-1">
          <use xlinkHref={image} />
        </svg>
        <span className="heading_small  cap"> {text}</span>
      </NavLink>
    </li>
  );
};

export default SidebarLink;
