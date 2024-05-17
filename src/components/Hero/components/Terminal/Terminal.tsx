import React, {useEffect} from 'react';
import styles from './Terminal.module.css';

import { outputTerminalText } from '../../../../utils/terminal';

const TERMINAL_OUTPUTS: string[] = [
  'break',
  'software engineer search initialized...',
  'break',
  'full-stack engineer located: installing...',
  'break',
  'installing front_end_dev...',
  'installing react, angular, html, css...',
  'installing back_end_dev...',
  'installing node.js, express, postgres',
  'break',
  'installation success!',
  'loading full_stack_dev...',
  'break',
  'Hello there. My name is Kevin Collins.'
];

const Terminal: React.FC = () => {
  useEffect(() => {
    (async () => {
      console.log('Initializing...');

      await outputTerminalText(TERMINAL_OUTPUTS);

    })();
  }, []);

  return (
    <div className={styles.terminalWindow}>
      <pre>
        <output id='terminalOutput' />
      </pre>
    </div>
  );
};

export default Terminal;
