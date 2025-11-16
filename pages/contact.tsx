import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Me contacter</h1>
      <p className={styles.pageSubtitle}>
        N&apos;hésitez pas à me contacter, via les plateformes mentionnées ci-dessous ! 
        Je suis ouvert à toutes opportunités et vous répondrai dans les plus brefs délais !
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
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
