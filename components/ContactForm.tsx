import { useState } from 'react';
import styles from '@/styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.message}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Erreur lors de l\'envoi du message');
    }
  };

  return (
    <div className={styles.contactBox}>
      <h2 className={styles.title}>Me contacter</h2>
      <p className={styles.subtitle}>
        Si vous souhaitez en savoir plus, n&apos;hésitez pas à me contacter.
      </p>

      {submitted && <div className={styles.successMessage}>Message envoyé avec succès ! ✓</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}
        />

        <button type="submit" className={styles.submitBtn}>
          Envoyer le message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
