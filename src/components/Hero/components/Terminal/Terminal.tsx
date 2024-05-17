import React from 'react';
import styles from './Terminal.module.css'

const Terminal: React.FC = () => {
  return (
    <div className={styles.terminalWindow}>
      <pre>
        <output>
          {/* <p>loading...</p>
          <p>loading success!</p> */}
          <p>loading kevin_collins...</p>
        </output>
      </pre>
    </div>
  );
};

export default Terminal;
