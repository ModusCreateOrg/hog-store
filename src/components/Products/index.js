// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { shuffle } from 'lodash-es';
import {
  delay,
  spring,
  logoAnimation,
  logoTransition,
} from './animation.config';
import s from './styles.module.css';

const initialColors = [
  ['#FF008C', '#FFF0FC'],
  ['#D309E1', '#A3F9A1'],
  ['#9C1AFF', '#F1FA0F'],
  ['#7700FF', '#77E0FF'],
  ['#FF008D', '#F1FA0F'],
  ['#D309E2', '#FFF0FC'],
  ['#9C1AFC', '#F1FA0F'],
  ['#7700FC', '#77E0FF'],
];

function Products() {
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), delay * 10000);
  }, [colors]);

  return (
    <section>
      <h2>Pick your next Hog ride</h2>
      <div className={s.animated}>
        {colors.map(([background, fill], idx) => (
          <motion.a
            whileHover={{ scale: 1.2 }}
            key={background}
            layoutTransition={spring}
            className={`${s.tile} ${s[`moto${idx + 1}`]}`}
            style={{ backgroundColor: background, '--logo-color': fill }}
          >
            <motion.div
              animate={logoAnimation}
              className={s.shine}
              transition={{
                ...logoTransition,
                delay: Math.random() * 3 * delay,
              }}
            ></motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Products;
