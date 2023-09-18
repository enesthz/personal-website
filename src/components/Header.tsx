import React from 'react';
import Link from 'next/link';
import styles from '../css_files/header.module.css';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.headerNameText}>Enes Taha Öz |</p>
      <div className={styles.headerLinkContainer}>
        <Link className={styles.headerLink} href={'/'}>
          HOME
        </Link>
        <Link className={styles.headerLink} href={'/about'}>
          ABOUT
        </Link>
        <Link className={styles.headerLink} href={'/projects'}>
          PROJECTS
        </Link>
        <Link className={styles.headerLink} href={'/cv'}>
          CV
        </Link>
      </div>
    </div>
  );
}

export default Header;
