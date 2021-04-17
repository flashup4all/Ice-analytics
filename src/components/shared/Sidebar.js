import React, {Fragment, useEffect} from 'react';
import SidebarLink from './sidebarLink';
// CUSTOM HOOKS
// ? these are used to check the windows width and open or close the sidebar when necessary
import useResize from '../hooks/UseResize';
import useAppCtx from '../hooks/useAppCtx';
// PHOTOS
import avatar from '../../images/avatar.svg';
import chart from '../../images/pie.svg';
import {motion, AnimatePresence} from 'framer-motion';

const slideIn = {
  initial: {
    x: -500,
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      when: 'afterChildren',
      ease: 'linear',
    },
  },
};

const sideBarData = [
  {
    text: 'prospective site',
    image: avatar + '#avatar',
    to: '/prospective',
  },
  {
    text: 'Active site',
    image: chart + '#pie',
    to: '/activesite',
  },
];

const breakpoint = 900;

const Sidebar = () => {
  const width = useResize ();
  const {close, open, isOpen} = useAppCtx ();

  useEffect (
    () => {
      if (width > breakpoint) open ();
      // else close ();
    },
    [width, open]
  );
  return (
    <AnimatePresence>
      {isOpen
        ? <Fragment>
            {width <= breakpoint &&
              isOpen &&
              <motion.div
                animate={{opacity: 1}}
                className="backdrop fill"
                style={{zIndex: 9}}
                onClick={close}
              />}

            <motion.div
              variants={slideIn}
              initial="initial"
              animate="final"
              exit="initial"
              className="sidebar bg-g-2"
            >
              {/* this span will be used to close the sidebar */}
              <span className="hamburger open" onClick={close} />
              <ul className="sidebar_list mb-2">
                {sideBarData.map ((data, index) => (
                  <SidebarLink
                    key={index}
                    {...data}
                    clickHandler={() => {
                      if (width <= breakpoint) close ();
                    }}
                  />
                ))}

              </ul>
            </motion.div>
          </Fragment>
        : null}
    </AnimatePresence>
  );
};

export default Sidebar;
