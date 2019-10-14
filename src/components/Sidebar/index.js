// @ts-nocheck
import React, { useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import { AnimatedUl, AnimatedLi } from '../Animated';

import './styles.css';

const list = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
  hidden: { opacity: 0, scale: 0.7 },
};

const items = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 10 },
};

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <Menu
      right
      disableAutoFocus
      pageWrapId="main"
      outerContainerId="root"
      onStateChange={({ isOpen }) => setTimeout(() => setOpen(isOpen), 50)}
    >
      {open ? (
        <AnimatedUl initial="hidden" animate="visible" variants={list}>
          <AnimatedLi variants={items}>
            <a className="menu-item" href="/">
              Home
            </a>
          </AnimatedLi>
          <AnimatedLi variants={items}>
            <a className="menu-item" href="/">
              My Hog
            </a>
          </AnimatedLi>
          <AnimatedLi variants={items}>
            <a className="menu-item" href="/">
              Cart
            </a>
          </AnimatedLi>
          <AnimatedLi variants={items}>
            <a className="menu-item" href="/">
              Contact
            </a>
          </AnimatedLi>
        </AnimatedUl>
      ) : (
        false
      )}
    </Menu>
  );
};

export default Hero;
