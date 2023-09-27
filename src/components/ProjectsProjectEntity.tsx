'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from 'src/css_files/projects_page/projectsProjectEntity.module.css';

function ProjectsProjectEntity({
  projectName,
  children,
}: {
  projectName: string;
  children: React.ReactNode;
}) {
  const [isTimeDone, setIsTimeDone] = useState(false);

  setTimeout(() => {
    setIsTimeDone(true);
  }, 2000);

  return (
    <div className={styles.projectsProjectEntity}>
      <p className={styles.projectName}>{projectName}</p>
      {isTimeDone && children}
    </div>
  );
}

export default ProjectsProjectEntity;
