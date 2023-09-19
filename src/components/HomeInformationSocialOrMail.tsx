import React from 'react';
import styles from '../css_files/home_page/homeInformationSocialOrEmail.module.css';

function HomeInformationSocialOrMail({
  children,
  socialOrMail,
}: {
  children: React.ReactNode;
  socialOrMail: string;
}) {
  return (
    <div className={styles.entityContainer}>
      {children}
      <p className={styles.socialOrMail}>{socialOrMail}</p>
    </div>
  );
}

export default HomeInformationSocialOrMail;
