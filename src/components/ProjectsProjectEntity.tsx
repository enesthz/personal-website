'use client';

import { useState } from 'react';
import styles from 'src/css_files/projects_page/projectsProjectEntity.module.css';

const breakpoint869 = window.matchMedia('(max-width:869px)');

function ProjectsProjectEntity({
  projectName,
  children,
}: {
  projectName: string;
  children: React.ReactNode;
}) {
  const [isTimeDone, setIsTimeDone] = useState<boolean>(false);

  function handleScreensizeChange(event: MediaQueryListEvent) {
    if (!event.matches) {
      setIsTimeDone(false);
    }
  }
  breakpoint869.addEventListener('change', handleScreensizeChange);

  setTimeout(() => {
    setIsTimeDone(true);
  }, 2000);

  return (
    <div className={styles.projectsProjectEntity}>
      <p className={styles.projectName}>{projectName}</p>
      {(breakpoint869.matches || isTimeDone) && children}
    </div>
  );
}

export default ProjectsProjectEntity;
