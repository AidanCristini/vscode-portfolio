import styles from '@/styles/ContactCode.module.css';

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
    link: 'CV (Canva)',
    href: 'https://www.canva.com/design/DAGAO4LwMyY/G-zsD238KikSX1dUTcmiPg/edit?utm_content=DAGAO4LwMyY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
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
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
