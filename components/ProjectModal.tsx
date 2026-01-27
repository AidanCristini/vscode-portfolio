import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { VscClose } from 'react-icons/vsc';

import { Project } from '@/types';
import { competences } from '@/data/competences';

import styles from '@/styles/ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Get competence objects from slugs
  const projectCompetences = project.competences
    ?.map((slug) => competences.find((c) => c.slug === slug))
    .filter(Boolean) || [];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <VscClose />
        </button>

        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.coverWrapper}>
              <Image
                src={project.coverImage}
                alt={`${project.title} preview`}
                fill
                className={styles.coverImage}
              />
              <div className={styles.coverOverlay} />
            </div>
            <h1 className={styles.title}>{project.title}</h1>
          </div>

          {/* Description */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Description</h2>
            <p className={styles.subtitle}>{project.description}</p>
            <p className={styles.fullDescription}>
              {project.fullDescription || project.description}
            </p>
          </section>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Galerie du projet</h2>
              <div className={styles.gallery}>
                {project.gallery.map((image, idx) => (
                  <div key={idx} className={styles.galleryItem}>
                    <Image
                      src={image}
                      alt={`${project.title} ${idx + 1}`}
                      width={400}
                      height={250}
                      className={styles.galleryImage}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className={styles.twoColumn}>
            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Technologies Utilisées</h2>
                <ul className={styles.list}>
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Fonctionnalités Clés</h2>
                <ul className={styles.list}>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Competences */}
          {projectCompetences.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Compétences Mobilisées</h2>
              <div className={styles.competencesList}>
                {projectCompetences.map((comp) => (
                  <span key={comp?.slug} className={styles.competenceBadge}>
                    {comp?.title}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Link to project */}
          {(project.link || project.webLink) && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Liens du projet</h2>
              <div className={styles.linksContainer}>
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Voir sur GitHub →
                  </Link>
                )}
                {project.webLink && (
                  <Link href={project.webLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    Voir la version web →
                  </Link>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
