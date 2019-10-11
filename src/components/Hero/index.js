// @ts-nocheck
import React from 'react';
import s from './styles.module.css';

const Hero = () => (
  <section className={s.hero}>
    <div className={s.content}>
      <div className={s.text}>
        <div className={s.textGradient}>
          <h1>Ride your Hog for $450/month</h1>
          <h3>Your neighbors are already doing it</h3>
        </div>
        <a className={s.cta} href="/">
          VROOOM!
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
