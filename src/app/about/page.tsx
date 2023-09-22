import styles from 'src/css_files/about_page/aboutPage.module.css';
import { MdOutlineWavingHand } from 'react-icons/md';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div>
        HELLO EVERYONE
        <MdOutlineWavingHand />
      </div>
      <br />
      <p className={styles.aboutPageDescription}>
        My name is <span>Enes Taha Öz</span>. I am a recent computer engineering graduate. I am 24
        years old and currently residing in <span>Istanbul, Turkey.</span>
        <br />
        <br /> I am a <span> Junior Frontend Developer</span> who is completing one project and
        currently working on another. I have a passion for continuous learning to improve his tech
        stack. I am actively pursuing the basics of Micro Frontends, showcasing my commitment to
        professional growth. I am known by both my colleagues and academic instructors for my{' '}
        <span>curious nature</span> and problem-solving approach. My biggest motivation in my career
        path is success. <br />
        <br /> I enjoy drama as well as basketball. I believe that these two hobbies have helped
        improve my <span>social and team collaboration skills.</span>
      </p>
    </div>
  );
}
