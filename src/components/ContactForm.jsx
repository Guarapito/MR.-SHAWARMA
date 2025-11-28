// ContactForm.jsx - Functional contact form component using EmailJS
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // EmailJS configuration - Replace with your actual IDs
  const SERVICE_ID = 'your_service_id';
  const TEMPLATE_ID = 'your_template_id';
  const PUBLIC_KEY = 'your_public_key';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Nuestro Sitio'
        },
        PUBLIC_KEY
      );

      setSubmitMessage('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
      {submitMessage && <p className="submit-message">{submitMessage}</p>}
    </form>
  );
};

export default ContactForm;