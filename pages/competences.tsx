import CompetencesCard from '@/components/CompetencesCard';
import { competences } from '@/data/competences';

import styles from '@/styles/ProjectCard.module.css';

const CompetencesPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Mes Compétences</h1>
      <p className={styles.pageSubtitle}>
        Voici les 6 compétences principales que j&apos;ai pu développer durant mes études.
      </p>

      <div className={styles.container}>
        {competences.map((competences) => (
          <CompetencesCard key={competences.slug} project={competences} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Competences' },
  };
}

export default CompetencesPage;
