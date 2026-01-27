import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { competences } from '@/data/competences';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  const router = useRouter();
  
  // Parse filter query param (comma-separated competence slugs)
  const initialFilters = useMemo(() => {
    const filter = router.query.filter as string;
    if (!filter) return new Set<string>();
    return new Set(filter.split(',').filter(Boolean));
  }, [router.query.filter]);

  const [selectedCompetences, setSelectedCompetences] = useState<Set<string>>(initialFilters);

  // Filter projects based on selected competences (AND logic - project must have ALL selected competences)
  const filteredProjects = useMemo(() => {
    if (selectedCompetences.size === 0) return projects;
    
    return projects.filter((project) => {
      if (!project.competences) return false;
      // Check if project has all selected competences
      return Array.from(selectedCompetences).every((comp) =>
        project.competences?.includes(comp)
      );
    });
  }, [selectedCompetences]);

  const toggleCompetenceFilter = (competenceSlug: string) => {
    const newFilters = new Set(selectedCompetences);
    
    if (newFilters.has(competenceSlug)) {
      newFilters.delete(competenceSlug);
    } else {
      newFilters.add(competenceSlug);
    }
    
    setSelectedCompetences(newFilters);
    
    // Update URL with new filters
    const filterString = Array.from(newFilters).join(',');
    if (filterString) {
      router.push(`/projects?filter=${filterString}`, undefined, { shallow: true });
    } else {
      router.push('/projects', undefined, { shallow: true });
    }
  };

  const clearFilters = () => {
    setSelectedCompetences(new Set());
    router.push('/projects', undefined, { shallow: true });
  };

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Mes Projets</h1>
      <p className={styles.pageSubtitle}>
        Une sélection de mes réalisations illustrant mes compétences en développement, 
        ma capacité à résoudre des problèmes complexes et mon aptitude au travail collaboratif.
      </p>

      {/* Competence Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterLabel}>
          Filtrer par compétence ({selectedCompetences.size} sélectionné{selectedCompetences.size > 1 ? 's' : ''}) :
        </div>
        <div className={styles.filterButtons}>
          {competences.map((comp) => (
            <button
              key={comp.slug}
              className={`${styles.filterButton} ${
                selectedCompetences.has(comp.slug) ? styles.active : ''
              }`}
              onClick={() => toggleCompetenceFilter(comp.slug)}
            >
              {comp.title}
            </button>
          ))}
        </div>
        {selectedCompetences.size > 0 && (
          <button className={styles.clearFiltersBtn} onClick={clearFilters}>
            Effacer tous les filtres
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <div className={styles.container}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : (
          <p className={styles.noProjects}>
            Aucun projet trouvé avec ces compétences.
          </p>
        )}
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
