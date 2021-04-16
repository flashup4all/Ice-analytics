import React from 'react';
import SidebarLink from './sidebarLink';
// PHOTOS
import avatar from '../../images/avatar.svg';
import chart from '../../images/pie.svg';

const sideBarData = [
  {
    text: 'prospective site',
    image: avatar + '#avatar',
    to: '/',
  },
  {
    text: 'Active site',
    image: chart + '#pie',
    to: '/activesite',
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar bg-g-2">
      <ul className="sidebar_list mb-2">
        {sideBarData.map ((data, index) => (
          <SidebarLink key={index} {...data} />
        ))}

      </ul>
    </div>
  );
};

export default Sidebar;
