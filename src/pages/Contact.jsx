// ContactForm.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cx271pu",
        "template_k1uwnzx",
        form.current,
        "AMD7cnPsxsEMepSxV"
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente 🎉");
          form.current.reset();
        },
        () => {
          alert("Error al enviar el mensaje ❌");
        }
      );
  };

  // 🎨 Estilos inline
  const styles = {
    form: {
      maxWidth: "450px",
      margin: "0 auto",
      padding: "25px",
      background: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      display: "flex",
      flexDirection: "column",
      gap: "18px",
    },
    title: {
      textAlign: "center",
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "5px",
    },
    label: {
      fontWeight: "600",
      marginBottom: "5px",
      color: "#444",
    },
    input: {
      padding: "12px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    textarea: {
      padding: "12px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      minHeight: "120px",
      resize: "none",
    },
    button: {
      background: "#ff914d",
      padding: "12px 18px",
      border: "none",
      color: "white",
      fontWeight: "bold",
      fontSize: "1rem",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "0.25s ease",
    },
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={styles.form}>
      <h2 style={styles.title}>Envíanos un mensaje</h2>

      <div>
        <label style={styles.label}>Nombre</label>
        <input
          type="text"
          name="user_name"
          placeholder="Tu nombre"
          required
          style={styles.input}
        />
      </div>

      <div>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="correo@ejemplo.com"
          required
          style={styles.input}
        />
      </div>

      <div>
        <label style={styles.label}>Mensaje</label>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          required
          style={styles.textarea}
        />
      </div>

      <button type="submit" style={styles.button}>
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactForm;
