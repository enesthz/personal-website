import HomeTechStack from '@/components/HomeTechStack';
import HomeInformation from '@/components/HomeInformation';
import styles from '../css_files/home_page/homePage.module.css';

export default function RootPage() {
  return (
    <div className={styles.homePage}>
      <HomeTechStack />
      <HomeInformation />
    </div>
  );
}
