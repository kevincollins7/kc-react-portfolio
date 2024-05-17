import React from 'react';
import styles from './Hero.module.css';

import Terminal from './components/Terminal/Terminal';
import HeroImg from './components/HeroImg/HeroImg';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroFirstHalf}>
        <Terminal />
      </div>
      <div className={styles.heroSecondHalf}>
        <HeroImg />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero;
