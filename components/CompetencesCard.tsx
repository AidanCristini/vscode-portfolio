import { Competences } from '@/types';

import styles from '@/styles/CompetencesCard.module.css';

interface CompetencesCardProps {
  competence: Competences;
  isExpanded?: boolean;
}

const CompetencesCard = ({ competence, isExpanded = false }: CompetencesCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{competence.title}</h3>
        <div className={styles.subtitle}>{competence.subtitle}</div>
        {isExpanded && <p className={styles.description}>{competence.description}</p>}
      </div>
      <div className={styles.badge}>{competence.title}</div>
    </div>
  );
};

export default CompetencesCard;
