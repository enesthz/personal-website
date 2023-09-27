'use client';

import { useState } from 'react';
import styles from 'src/css_files/projects_page/projectsProjectEntity.module.css';

let breakpoint869: MediaQueryList;

if (typeof window !== 'undefined') {
  breakpoint869 = window.matchMedia('(max-width:869px)');
}

function ProjectsProjectEntity({
  projectName,
  children,
}: {
  projectName: string;
  children: React.ReactNode;
}) {
  const [isTimeDone, setIsTimeDone] = useState<boolean>(false);

  function handleScreensizeChange(event: MediaQueryListEvent) {
    if (!(event !== undefined && event.matches)) {
      setIsTimeDone(false);
    }
  }

  if (breakpoint869 !== undefined) {
    breakpoint869.addEventListener('change', handleScreensizeChange);
  }

  let childWillBeRendered: React.ReactNode;

  if (breakpoint869 !== undefined) {
    if ((breakpoint869.matches !== undefined && breakpoint869.matches) || isTimeDone) {
      childWillBeRendered = children;
    } else {
      childWillBeRendered = false;
    }
  }

  setTimeout(() => {
    setIsTimeDone(true);
  }, 2000);

  return (
    <div className={styles.projectsProjectEntity}>
      <p className={styles.projectName}>{projectName}</p>
      {childWillBeRendered}
    </div>
  );
}

export default ProjectsProjectEntity;
