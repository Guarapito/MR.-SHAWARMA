// Home.jsx - Main landing page component for MR SHAWARMA
import React from 'react';
import shawarmaImg from "./shawarma.jpg";
import comidaArabeImg from "./comida-arabe.jpg";

const Home = () => {
  return (
    <main className="home">

      {/* SECCIÓN HERO */}
      <section
        className="hero"
        style={{
          textAlign: "center",
          padding: "60px 20px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604908177253-94a5f415b6a5?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.6)",
          border: "4px solid #ff914d",
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: "900",
            textShadow: "4px 4px 8px black",
            letterSpacing: "2px",
          }}
        >
          BIENVENIDO A MR SHAWARMA BUCARAMANGA
        </h1>

        <p
          style={{
            fontSize: "1.4rem",
            marginTop: "15px",
            textShadow: "2px 2px 6px black",
            fontWeight: "bold",
          }}
        >
          El auténtico sabor árabe con un toque moderno. Shawarmas, falafel y papas árabes
          preparados con ingredientes frescos y llenos de sabor.
        </p>

        <a
          href="https://www.instagram.com/mr.shawarmabga/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "25px",
            padding: "15px 30px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #ff914d, #ff3c00)",
            borderRadius: "12px",
            border: "3px solid white",
            color: "white",
            cursor: "pointer",
            display: "inline-block",
            textDecoration: "none",
            boxShadow: "0 0 15px rgba(255,100,20,0.8)",
            textTransform: "uppercase",
          }}
        >
          Ver Menú
        </a>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section className="features" style={{ padding: "50px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.8rem",
            marginBottom: "30px",
            color: "#ff3c00",
            textShadow: "2px 2px 5px #00000055",
            fontWeight: "900",
            letterSpacing: "1px",
          }}
        >
          ⭐ Nuestros Servicios ⭐
        </h2>

        <div
          className="feature-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "30px",
            padding: "15px",
          }}
        >
          {/* Servicio 1 */}
          <div
            className="feature-item"
            style={{
              background: "#fff7ed",
              padding: "20px",
              borderRadius: "15px",
              border: "3px solid #ff914d",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <img
              src={shawarmaImg}
              alt="shawarma"
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            />
            <h3
              style={{
                fontSize: "1.6rem",
                color: "#ff3c00",
                fontWeight: "900",
              }}
            >
              Shawarmas Artesanales
            </h3>
            <p style={{ margin: "10px 0", fontWeight: "600" }}>
              Preparados al instante con pan suave, carne jugosa o pollo marinado,
              vegetales frescos y salsas caseras.
            </p>

            <p
              style={{
                marginTop: "10px",
                fontSize: "1.3rem",
                fontWeight: "bold",
                color: "#0a7f00",
              }}
            >
              💲 Precio: desde $12.000
            </p>
          </div>

          {/* Servicio 2 */}
          <div
            className="feature-item"
            style={{
              background: "#fff7ed",
              padding: "20px",
              borderRadius: "15px",
              border: "3px solid #ff914d",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <img
              src={comidaArabeImg}
              alt="comida árabe"
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            />
            <h3
              style={{
                fontSize: "1.6rem",
                color: "#ff3c00",
                fontWeight: "900",
              }}
            >
              Comida Rápida Árabe
            </h3>
            <p style={{ margin: "10px 0", fontWeight: "600" }}>
              Papas árabes, falafel, wraps especiales y acompañamientos del Medio Oriente.
            </p>

            <p
              style={{
                marginTop: "10px",
                fontSize: "1.3rem",
                fontWeight: "bold",
                color: "#0a7f00",
              }}
            >
              💲 Precio: desde $10.000
            </p>
          </div>

          {/* Servicio 3 */}
          <div
            className="feature-item"
            style={{
              background: "#fff7ed",
              padding: "20px",
              borderRadius: "15px",
              border: "3px solid #ff914d",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
              alt="domicilios"
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            />
            <h3
              style={{
                color: "#ff3c00",
                fontSize: "1.6rem",
                fontWeight: "900",
              }}
            >
              Hamburguesas Iluminatis
            </h3>
            <p style={{ margin: "10px 0", fontWeight: "600" }}>
              Llevamos tu hamburguesa favorita hasta tu casa. Rápido, seguro y delicioso.
            </p>

            <p
              style={{
                marginTop: "10px",
                fontSize: "1.3rem",
                fontWeight: "bold",
                color: "#0a7f00",
              }}
            >
              💲 Precio: desde $18.000
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;