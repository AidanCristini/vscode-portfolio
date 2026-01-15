import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>CV</h1> 
        <br></br>
        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph} style={{ textAlign: 'center' }}>
              Voici mon CV !
            </p>
            <div>
              <iframe
                src="/cv/AidanCRISTINI_CV.pdf"
                title="Aidan CRISTINI CV"
                style={{ width: '100%', height: '900px', border: 'none' }}
              />
              <p style={{ marginTop: '0.5rem' }}>
                Si mon CV ne s&apos;affiche pas ou que vous avez besoin, <a href="/cv/AidanCRISTINI_CV.pdf" download className={styles.downloadLink}>téléchargez mon CV ici</a> !
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'CV' },
  };
}

export default AboutPage;
