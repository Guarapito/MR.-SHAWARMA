// Footer.jsx - Footer component
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(45deg, #ff914d, #ff3c00)",
        padding: "40px 20px",
        color: "white",
        marginTop: "40px",
        boxShadow: "0px -5px 15px rgba(0,0,0,0.3)",
        borderTop: "4px solid #ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        {/* LOGO O NOMBRE */}
        <div style={{ flex: "1" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "900",
              textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
              letterSpacing: "1px",
            }}
          >
            MR SHAWARMA
          </h2>
          <p style={{ marginTop: "5px", fontWeight: "bold" }}>
            Sabor auténtico árabe en Bucaramanga
          </p>
        </div>

        {/* LINKS */}
        <div style={{ flex: "1" }}>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              marginBottom: "10px",
              textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            Enlaces rápidos
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li><a href="/" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Inicio</a></li>
            <li><a href="/menu" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Menú</a></li>
            <li><a href="/contacto" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Contacto</a></li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div style={{ flex: "1" }}>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              marginBottom: "10px",
              textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            Síguenos
          </h3>

          <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <a
              href="#"
              style={{
                color: "white",
                fontSize: "1.4rem",
                textDecoration: "none",
                fontWeight: "bold",
                background: "rgba(0,0,0,0.3)",
                padding: "10px 15px",
                borderRadius: "10px",
                boxShadow: "0px 3px 6px rgba(0,0,0,0.4)",
              }}
            >
              👍 Facebook
            </a>

            <a
              href="#"
              style={{
                color: "white",
                fontSize: "1.4rem",
                textDecoration: "none",
                fontWeight: "bold",
                background: "rgba(0,0,0,0.3)",
                padding: "10px 15px",
                borderRadius: "10px",
                boxShadow: "0px 3px 6px rgba(0,0,0,0.4)",
              }}
            >
              📷 Instagram
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p
        style={{
          marginTop: "30px",
          textAlign: "center",
          fontWeight: "bold",
          opacity: 0.9,
        }}
      >
        © 2025 MR SHAWARMA. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
