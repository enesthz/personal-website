import React from 'react';
import styles from '../css_files/home_page/homeTechStackTechEntity.module.css';

function HomeTechStackTechEntity({
  children,
  techName,
}: {
  children: React.ReactNode;
  techName: string;
}) {
  return (
    <div className={styles.entityContainer}>
      {children}
      <p className={styles.techName}>{techName}</p>
    </div>
  );
}

export default HomeTechStackTechEntity;
