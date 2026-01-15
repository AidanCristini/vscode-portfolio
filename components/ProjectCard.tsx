import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/types';
import { competences } from '@/data/competences';
import ProjectModal from '@/components/ProjectModal';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Map project competence slugs to competence objects
  const projectCompetences = project.competences
    ?.map((slug) => competences.find((c) => c.slug === slug))
    .filter(Boolean) || [];

  return (
    <>
      <div className={styles.cardWrapper}>
        <button
          className={styles.card}
          onClick={() => setIsModalOpen(true)}
        >
          <div className={styles.content}>
            <div className={styles.header}>
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
            </div>
            
            {projectCompetences.length > 0 && (
              <div className={styles.competencesBadges}>
                {projectCompetences.map((comp) => (
                  <span
                    key={comp?.slug}
                    className={styles.badge}
                  >
                    {comp?.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </button>

        {projectCompetences.length > 0 && (
          <Link
            href={`/competences?highlight=${projectCompetences.map((c) => c?.slug).join(',')}`}
            className={styles.viewCompetencesBtn}
            onClick={(e) => e.stopPropagation()}
          >
            Voir les compétences associés →
          </Link>
        )}
      </div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
