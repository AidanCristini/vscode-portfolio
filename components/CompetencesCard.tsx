import Image from 'next/image';

import { Competences } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface CompetencesCardProps {
  project: Competences;
}

const CompetencesCard = ({ project }: CompetencesCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={24}
            height={24}
            className={styles.logo}
          />
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </a>
  );
};

export default CompetencesCard;
