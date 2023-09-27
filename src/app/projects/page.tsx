import styles from 'src/css_files/projects_page/projectsPage.module.css';
import ProjectsProjectEntity from '@/components/ProjectsProjectEntity';

export default function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <ProjectsProjectEntity projectName='ByteBuy'>
        <p>
          ByteBuy is an e-commerce web application. The heart of our project was to design a web
          application that not only cares about the usability but also offers a welcoming user
          interface. During the development phase, we carefully equipped powerful tools such as{' '}
          <span>React, React Router, and Axios</span>, all of which combined to create a
          user-intuitive Front-End experience. Also, we introduced <span>Styled Components</span> to
          provide sophisticated styling for our application.
        </p>
      </ProjectsProjectEntity>
      <ProjectsProjectEntity projectName='Personal Website'>
        <p>
          The main goal of this project is to create a personal website for me. To achieve this, I
          am utilizing <span>Next.js</span> for efficient static site generation. I am also using
          <span>TypeScript</span> for <span>static type checking</span>. Additionally, I am paying
          attention to the visual details by incorporating <span>CSS Modules</span> to achieve a
          refined and elegant styling.
        </p>
      </ProjectsProjectEntity>
    </div>
  );
}
