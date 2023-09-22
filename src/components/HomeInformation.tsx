import React from 'react';
import Image from 'next/image';
import styles from '../css_files/home_page/homeInformation.module.css';
import HomeInformationSocialOrMail from './HomeInformationSocialOrMail';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { GrMail } from 'react-icons/gr';

function HomeInformation() {
  return (
    <div className={styles.infoContainer}>
      <Image
        src={'/profile.jpg'}
        alt='profile'
        width={224}
        height={224}
        className={styles.infoImage}
      />
      <p className={styles.infoText}>
        Hello World. I am <span>Enes Taha Öz</span>. I am a dedicated
        <span> Jr. Front End Developer</span> from <span>Turkey</span>.
      </p>
      <div className={styles.infoSocialOrMail}>
        <a href='https://twitter.com/enesthzdev'>
          <HomeInformationSocialOrMail socialOrMail='enesthzdev'>
            <FaXTwitter size={'1.83125rem'} />
          </HomeInformationSocialOrMail>
        </a>
        <a href='https://www.linkedin.com/in/enes-taha-%C3%B6z-845915173/'>
          <HomeInformationSocialOrMail socialOrMail='Enes Taha Öz'>
            <FaLinkedin size={'1.83125rem'} />
          </HomeInformationSocialOrMail>
        </a>
      </div>
      <div className={styles.infoSocialOrMail}>
        <a href='mailto:enestahaoz@gmail.com'>
          <HomeInformationSocialOrMail socialOrMail='enestahaoz@gmail.com'>
            <GrMail size={'1.83125rem'} />
          </HomeInformationSocialOrMail>
        </a>
      </div>
    </div>
  );
}

export default HomeInformation;
