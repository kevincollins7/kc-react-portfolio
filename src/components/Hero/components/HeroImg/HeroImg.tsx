import React from 'react';
import styles from './HeroImg.module.css';
import PicGuy from '../../../../assets/images/guy.avif';

const HeroImg: React.FC = () => {
  return (
    <>
      <img className={styles.profilePic} src={PicGuy} alt='Pixel Profile Pic' />
      <p>Hello there!</p>
    </>
  );
};

export default HeroImg;
