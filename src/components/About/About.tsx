import React from 'react';
import styles from './About.module.css';

import BarnOwl from '../../assets/images/barnowl.png';

const About: React.FC = () => {
  return (
    <section id='about' className={styles.aboutContainer}>
      <h2 className={styles.title}>About</h2>

      <div className={styles.aboutContent}>
        <div>
          <img className={styles.aboutImg} src={BarnOwl} alt='Pixel Barn Owl' />
        </div>

        <div>
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>Software Engineering Manager</h3>
                <p>I've been lucky enough to lead teams of Software Engineers.</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
                <h3>Full-Stack Engineer</h3>
                <p>I'm a fullstack developer with experience building user-friendly UIs, developer friendly APIs, and well organized databases.</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>Site Reliability Engineer</h3>
                <p>I have experience as an SRE building effective relationships with developers and optimizing workflows with technolgies such as Terraform and Github Actions.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
