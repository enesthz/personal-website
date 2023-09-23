import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styles from 'src/css_files/headerDropdown.module.css';

function HeaderDropdown({ dropdownListItems }: { dropdownListItems: string[] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  function handleClickMenuIcon(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
    if (isDropdownOpen) {
      document.getElementById('dropdownMenu')!.className = '';
    } else {
      document.getElementById('dropdownMenu')!.className = styles.headerDropdownMenu;
    }
  }

  const dropdownList = dropdownListItems.map((item, index) => {
    return item !== 'cv' ? (
      <Link
        key={index}
        className={styles.headerDropdownLinks}
        href={`/${item !== 'home' ? item : ''}`}>
        {item}
      </Link>
    ) : (
      <a key={index} href='/CV.pdf' download>
        CV
      </a>
    );
  });

  return (
    <div className={styles.headerDropdown}>
      <div id='menuIcon' onClick={handleClickMenuIcon}>
        <AiOutlineMenu color={'white'} size={'1.5rem'} />
      </div>
      <div id='dropdownMenu'>{isDropdownOpen && dropdownList}</div>
    </div>
  );
}

export default HeaderDropdown;
