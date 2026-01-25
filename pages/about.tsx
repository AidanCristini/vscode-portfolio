import Image from 'next/image';
import { VscCalendar, VscLocation } from 'react-icons/vsc';
import { FaBriefcase, FaGraduationCap, FaPython, FaDatabase, FaBrain, FaChartLine, FaCar } from 'react-icons/fa';
import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  const personalInfo = [
    { icon: <VscCalendar />, label: '19 ans' },
    { icon: <VscLocation />, label: 'Toulouse' },
    { icon: <FaCar/>, label: 'Permis B' },
  ];

  const technologies = [
    { icon: <FaPython />, label: 'Java - Python - Web Development' },
    { icon: <FaDatabase />, label: 'SQL - NoSQL' },
    { icon: <FaBrain />, label: 'UNIX - LINUX' },
    { icon: <FaChartLine />, label: 'Flutter' },
  ];

  const experiences = [
    {
      period: 'Septembre 2024 - Août 2026',
      title: 'Mise en Oeuvre de la Maintenance Applicative',
      type: 'ALTERNANCE',
      company: 'Toulouse Métropole, Toulouse',
      description: 'Participation à la maintenance et l\'évolution des applications internes de la métropole.',
      logo: '/logos/toulouse-metropole.png',
    },
  ];

  const education = [
    {
      period: '2023 - 2026',
      title: 'BUT Informatique',
      institution: 'IUT Blagnac, Blagnac',
      description: 'Parcours A - Réalisation d\'applications - Conception, développement, validation.',
    },
    {
      period: '2020 - 2023',
      title: 'Baccalauréat Général',
      institution: 'Lycée Général Saint-Sernin, Toulouse',
      description: 'Mathématiques - Numérique et Sciences Informatiques - Physique-Chimie | Options Anglais Européen - Droits et Grands Enjeux du Monde Contemporain',
      mention: 'Mention Bien - Option Anglais Européen',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>À propos de moi</h1>
          <p className={styles.description}>
            Actuellement étudiant en BUT Informatique à l&apos;IUT de Blagnac, je suis passionné par le développement logiciel et la création d&apos;applications innovantes. 
            Mon parcours académique et mes expériences professionnelles m&apos;ont permis de développer des compétences solides en programmation, gestion de projets et travail en équipe.
          </p>
          
          <div className={styles.personalInfo}>
            {personalInfo.map((info, index) => (
              <div key={index} className={styles.infoItem}>
                <span className={styles.infoIcon}>{info.icon}</span>
                <span className={styles.infoLabel}>{info.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.techSection}>
            <h2 className={styles.techTitle}>Technologies principales</h2>
            <div className={styles.techGrid}>
              {technologies.map((tech, index) => (
                <div key={index} className={styles.techItem}>
                  <span className={styles.techIcon}>{tech.icon}</span>
                  <span className={styles.techLabel}>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expériences Title */}
      <h2 className={styles.sectionMainTitle}>Expériences</h2>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineColumn}>
          <h2 className={styles.columnTitle}>
            <FaBriefcase className={styles.columnIcon} />
            Professionnelle
          </h2>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelinePeriod}>{exp.period}</div>
                <div className={styles.timelineCard}>
                  <h3 className={styles.timelineTitle}>{exp.title}</h3>
                  <div className={styles.timelineCompany}>
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={24}
                        height={24}
                        className={styles.companyLogo}
                      />
                    )}
                    <span className={styles.timelineType}>{exp.type}</span>
                    <span> - {exp.company}</span>
                  </div>
                  <p className={styles.timelineDescription}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.timelineColumn}>
          <h2 className={styles.columnTitle}>
            <FaGraduationCap className={styles.columnIcon} />
            Académique
          </h2>
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelinePeriod}>{edu.period}</div>
                <div className={styles.timelineCard}>
                  <h3 className={styles.timelineTitle}>{edu.title}</h3>
                  <div className={styles.timelineInstitution}>{edu.institution}</div>
                  <p className={styles.timelineDescription}>{edu.description}</p>
                  {edu.mention && (
                    <span className={styles.mention}>{edu.mention}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;