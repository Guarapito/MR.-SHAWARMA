// About.jsx - About page component
import React from "react";

const About = () => {
  return (
    <main
      className="about"
      style={{
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      {/* TÍTULO */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#ff914d" }}>
          Acerca de MR SHAWARMA
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px", color: "#555" }}>
          Auténtico sabor árabe hecho con pasión, calidad y tradición.
        </p>
      </section>

      {/* DESCRIPCIÓN PRINCIPAL */}
      <section
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          lineHeight: "1.6",
        }}
      >
        <p>
          MR SHAWARMA es un emprendimiento ubicado en Bucaramanga, dedicado a
          ofrecer auténtica comida árabe con un toque moderno. Nos caracterizamos
          por sabores frescos, ingredientes de calidad y una experiencia
          gastronómica única.
        </p>

        <p style={{ marginTop: "15px" }}>
          Desde nuestro inicio, hemos trabajado para convertirnos en uno de los
          lugares favoritos para disfrutar shawarmas, falafel, papas árabes,
          wraps y otras especialidades que representan lo mejor de la cocina del
          Medio Oriente.
        </p>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {/* MISIÓN */}
        <div
          style={{
            background: "#fff7f0",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#ff914d", marginBottom: "10px" }}>Misión</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Brindar a Bucaramanga comida árabe deliciosa, fresca y accesible,
            acompañada de un servicio cercano y amable que haga sentir a cada
            cliente como en casa.
          </p>
        </div>

        {/* VISIÓN */}
        <div
          style={{
            background: "#fff7f0",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#ff914d", marginBottom: "10px" }}>Visión</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Convertirnos en la marca líder de shawarmas y comida árabe en
            Santander, expandiéndonos con más puntos de atención y siendo
            reconocidos por la calidad, el sabor y la innovación en nuestros
            productos.
          </p>
        </div>
      </div>

      {/* VALORES */}
      <section
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ff914d",
            marginBottom: "15px",
          }}
        >
          Valores
        </h2>
        <p style={{ textAlign: "center", color: "#555", fontSize: "1.1rem" }}>
          Pasión por la comida, atención al detalle, honestidad, trabajo en
          equipo y compromiso con nuestros clientes.
        </p>
      </section>
    </main>
  );
};

export default About;
