import React, {useState} from "react";
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>Kevin Collins</a>

      <div className={styles.menu}>
        <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          { menuOpen
            ? <FaRegWindowClose />
            : <FaBars />
          }
        </div>
        
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;