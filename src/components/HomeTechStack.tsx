'use client';

import React from 'react';
import styles from '../css_files/home_page/homeTechStack.module.css';
import HomeTechStackTechEntity from './HomeTechStackTechEntity';
import { FaReact } from 'react-icons/fa6';
import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import {
  SiJest,
  SiStyledcomponents,
  SiNextdotjs,
  SiPrettier,
  SiEslint,
  SiNpm,
} from 'react-icons/si';

function HomeTechStack() {
  return (
    <div className={styles.techStackBoardContainer}>
      <div className={styles.techStackContainer}>
        <div className={styles.techStackColumn}>
          <HomeTechStackTechEntity techName={'React.js'}>
            <FaReact color={'#1E1E1E'} size={'4.718rem'} />
          </HomeTechStackTechEntity>
          <HomeTechStackTechEntity techName={'Redux Toolkit'}>
            <BiLogoRedux color={'#1E1E1E'} size={'4.718rem'} />
          </HomeTechStackTechEntity>
          <HomeTechStackTechEntity techName={'styled-components'}>
            <SiStyledcomponents color={'#1E1E1E'} size={'4.718rem'} />
          </HomeTechStackTechEntity>
        </div>
        <div className={styles.techStackColumn}>
          <HomeTechStackTechEntity techName={'Typescript'}>
            <BiLogoTypescript color={'#1E1E1E'} size={'4.718rem'} />
          </HomeTechStackTechEntity>
          <HomeTechStackTechEntity techName={'Jest'}>
            <SiJest color={'1E1E1E'} size={'4.718rem'} />
          </HomeTechStackTechEntity>
          <HomeTechStackTechEntity techName={'Next.js'}>
            <SiNextdotjs color={'1E1E1E'} size={'4.718rem'} />
          </HomeTechStackTechEntity>
        </div>
        <div className={styles.techStackColumn}>
          <HomeTechStackTechEntity techName={'Prettier'}>
            <SiPrettier color={'1E1E1E'} size={'4.718rem'} />
          </HomeTechStackTechEntity>
          <HomeTechStackTechEntity techName={'ESLint'}>
            <SiEslint color={'1E1E1E'} size={'4.718rem'} />
          </HomeTechStackTechEntity>
          <HomeTechStackTechEntity techName={'npm'}>
            <SiNpm color={'1E1E1E'} size={'4.718rem'} />
          </HomeTechStackTechEntity>
        </div>
      </div>
    </div>
  );
}

export default HomeTechStack;