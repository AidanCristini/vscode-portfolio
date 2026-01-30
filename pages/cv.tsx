import aboutStyles from '@/styles/AboutPage.module.css';
import cvStyles from '@/styles/CvPage.module.css';

const AboutPage = () => {
  return (
    <div className={aboutStyles.container}>
      <div className={cvStyles.cvCard}>
        <h1 className={aboutStyles.title}>Mon CV</h1>
        <p className={cvStyles.cvSubtitle}>Découvrez mon parcours et mes compétences</p>
        <div className={cvStyles.cvIframeWrapper}>
          <iframe
            src="/cv/AidanCRISTINI_CV.pdf"
            title="Aidan CRISTINI CV"
            className={cvStyles.cvIframe}
          />
        </div>
        <p className={cvStyles.cvNote}>
          Si le CV ne s&apos;affiche pas correctement, vous pouvez le télécharger directement.
        </p>
        <div className={cvStyles.cvButtonWrapper}>
          <a href="/cv/AidanCRISTINI_CV.pdf" download className={cvStyles.cvDownloadButton}>
            Télécharger mon CV
          </a>
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
