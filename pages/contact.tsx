import ContactCode from '@/components/ContactCode';
import ContactForm from '@/components/ContactForm';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Me contacter</h1>
      <p className={styles.pageSubtitle}>
        N&apos;hésitez pas à me contacter, via les plateformes mentionnées ci-dessous ! 
        Je suis ouvert à toutes opportunités et vous répondrai dans les plus brefs délais !
      </p>
      <div className={styles.twoColumnContainer}>
        <div className={styles.formSection}>
          <ContactForm />
        </div>
        <div className={styles.codeSection}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
