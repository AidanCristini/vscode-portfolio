import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Aidan CRISTINI</h1>
        <div className={styles.subtitle}>Etudiant en Alternance en 3ème Année de BUT Informatique</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Bonjour ! Je m&apos;appelle Aidan CRISTINI, un étudiant en 3ème année de BUT Informatique en alternance. 
              Ceci est mon portfolio où je partage mes projets personnels et universitaires, expériences et passions dans le domaine de l&apos;informatique.
            </p>
            <p className={styles.paragraph}>
              Mes compétences incluent le développement applicatif et web, la programmation orientée objet, 
              la gestion de bases de données, l&apos;administration système et bien plus encore.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Expérience</h2>
            <p className={styles.paragraph}>
              Grâce à l&apos;alternance, j&apos;ai eu l&apos;opportunité de travailler sur divers projets réels en entreprise,
              ce qui m&apos;a permis d&apos;appliquer mes connaissances théoriques et de développer mes compétences pratiques, 
              en plus d&apos;élargir mon champ de connaissances grâce à des expériences externes à l&apos;université.
            </p>
            <p className={styles.paragraph}>
              J&apos;ai pu travailler en alternance chez Toulouse Métropole pendant deux ans, 
              dans l&apos;équipe en charge de la maintenance applicative de l&apos;intégralité de la Métropole ! <br></br>
              Cette expérience m&apos;a permis de travailler sur un environnement Microsoft (0365) en automatisant 
              les tâches de mon équipe grâce à PowerAutomate, et de contrstruire des KPI pour montrer nos résultats via PowerBI.
              J&apos;ai pu prendre en charge la maintenance et la gestion d&apos;une application essentielle à la Métropole,
              ScreenSoft, qui permet à la collectivité de gérer les écrans d&apos;affichage dynamique dans les bâtiments publics,
              notamment pour diffuser des informations aux citoyens.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>En dehors de l&apos;informatique</h2>
            <p className={styles.paragraph}>
              En dehors de mes études et de l&apos;informatique, j&apos;aime passer du temps avec mes amis, au bar comme en montagne ou au sport.
              En termes d&apos;activités sportives, je pratique la musculation en salle et la course à pied, en étant passé par 3 ans de football américain,
              du triathlon, de l&apos;escalade et du krav maga.<br></br>
              Je suis passionné de musique et je fais des mix et remix sur ordinateur.
              Je suis également un grand amateur de jeux vidéo (et de sociétés !), en particulier les jeux de stratégies et de gestion.<br></br>
              Pour terminer, je suis engagé en tant que Réserviste Militaire dans l&apos;Armée de Terre à la 11ème Compagnie de Commandement et de Transmissions Parachutiste.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
