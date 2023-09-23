'use client';

import Link from 'next/link';
import styles from '../css_files/header.module.css';
import HeaderDropdown from './HeaderDropdown';
import { useState } from 'react';

const breakpoint600 = window.matchMedia('(max-width:600px)');

function Header() {
  const [isBreakpoint600Matched, setIsBreakpoint600Matched] = useState<boolean>(
    breakpoint600.matches,
  );

  function handleScreensizeChange(event: MediaQueryListEvent) {
    if (event.matches) {
      setIsBreakpoint600Matched(true);
    } else {
      setIsBreakpoint600Matched(false);
    }
  }
  breakpoint600.addEventListener('change', handleScreensizeChange);

  return (
    <div className={styles.headerContainer}>
      <p className={styles.headerNameText}>Enes Taha Öz |</p>
      {isBreakpoint600Matched ? (
        <HeaderDropdown dropdownListItems={['home', 'about', 'projects', 'cv']}></HeaderDropdown>
      ) : (
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
          <a className={styles.headerLink} href={'/CV.pdf'} download>
            CV
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
