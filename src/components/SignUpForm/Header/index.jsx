import React from 'react';
import { MdOutlineNoteAlt } from 'react-icons/md';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.head}>
      <div className={styles.headIcon}>
        <MdOutlineNoteAlt/>
      </div>
      <h1 className={styles.title}>
        Create Your Account
      </h1>
    </div>
  );
}

export default Header;
