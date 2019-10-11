// @ts-nocheck
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { push as Menu } from 'react-burger-menu';

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
        <motion.ul initial="hidden" animate="visible" variants={list}>
          <motion.li variants={items}>
            <a className="menu-item" href="/">
              Home
            </a>
          </motion.li>
          <motion.li variants={items}>
            <a className="menu-item" href="/">
              My Hog
            </a>
          </motion.li>
          <motion.li variants={items}>
            <a className="menu-item" href="/">
              Cart
            </a>
          </motion.li>
          <motion.li variants={items}>
            <a className="menu-item" href="/">
              Contact
            </a>
          </motion.li>
        </motion.ul>
      ) : (
        false
      )}
    </Menu>
  );
};

export default Hero;
