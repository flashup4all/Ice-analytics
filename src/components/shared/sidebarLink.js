import React from 'react';

const SidebarLink = ({text, image}) => {
  return (
    <li className="sidebar_list_item">
      <button className={`sidebar_link btn_plain cap flexi bg-g-2`}>
        <svg className="small_svg mr-1">
          <use xlinkHref={image} />
        </svg>
        <span className="heading_small  cap"> {text}</span>
      </button>
    </li>
  );
};

export default SidebarLink;
