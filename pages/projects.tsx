import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Mes Projets</h1>
      <p className={styles.pageSubtitle}>
        Voici une sélection de projets sur lesquels j&apos;ai pu travailler.
        Ces projets me permettent de mettre en avant mes compétences
        en développement ainsi que ma capacité à résoudre des problèmes complexes.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
