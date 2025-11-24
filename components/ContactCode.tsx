import styles from '@/styles/ContactCode.module.css';
import Link from 'next/link';

const contactItems = [
  {
    social: 'email',
    link: 'aidan.cristini.pro@gmail.com',
    href: 'mailto:aidan.cristini.pro@gmail.com',
  },
  {
    social: 'github',
    link: 'AidanCristini',
    href: 'https://github.com/AidanCristini',
  },
  {
    social: 'linkedin',
    link: 'Aidan Cristini',
    href: 'https://www.linkedin.com/in/aidan-cristini-ba63a922b/',
  },
  {
    social: 'CV',
    link: 'CV',
    href: '/cv',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          {item.href === '/cv' ? (
            <Link href={item.href}>{item.link}</Link>
          ) : (
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.link}
            </a>
          )}
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
