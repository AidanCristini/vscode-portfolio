import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import CompetencesCard from '@/components/CompetencesCard';
import { competences } from '@/data/competences';

import styles from '@/styles/CompetencesPage.module.css';

const CompetencesPage = () => {
  const router = useRouter();
  const { filter, highlight } = router.query;
  
  // Parse highlight parameter into array of slugs
  const highlightedCompetences = useMemo(() => {
    if (!highlight) return [];
    return (highlight as string).split(',').filter(Boolean);
  }, [highlight]);

  // Initialize expanded state - expanded if highlighted or filtered
  const [expandedCards, setExpandedCards] = useState<Set<string>>(
    new Set(highlightedCompetences)
  );

  const toggleCard = (slug: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(slug)) {
      newExpanded.delete(slug);
    } else {
      newExpanded.add(slug);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>Mes Compétences</h1>
        <p className={styles.pageSubtitle}>
          Voici les 6 compétences principales que j&apos;ai pu développer durant mes études.
          Cliquez sur une compétence pour voir les détails.
        </p>
      </div>

      <div className={styles.container}>
        {competences.map((competence) => {
          const isExpanded = expandedCards.has(competence.slug);
          const isHighlighted = highlightedCompetences.includes(competence.slug);
          
          return (
            <div
              key={competence.slug}
              className={`${styles.competenceWrapper} ${
                isHighlighted ? styles.highlighted : ''
              }`}
            >
              <button
                className={`${styles.cardButton} ${isExpanded ? styles.expanded : ''}`}
                onClick={() => toggleCard(competence.slug)}
              >
                <CompetencesCard
                  competence={competence}
                  isExpanded={isExpanded}
                />
              </button>
              <div className={styles.cardFooter}>
                <Link href={`/projects?filter=${competence.slug}`} className={styles.viewProjects}>
                  Voir les projets →
                </Link>
              </div>
            </div>
          );
        })}
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
