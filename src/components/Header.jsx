// Header.jsx - Navigation header component
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        background: "linear-gradient(45deg, #ff914d, #ff3c00)",
        padding: "15px 20px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        borderBottom: "4px solid white",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <div>
          <Link
            to="/"
            style={{
              fontSize: "2rem",
              fontWeight: "900",
              color: "white",
              textDecoration: "none",
              letterSpacing: "2px",
              textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
            }}
          >
            MR SHAWARMA
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "10px 18px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "10px",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.3)",
            }}
          >
            Inicio
          </Link>

          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "10px 18px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "10px",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.3)",
            }}
          >
            Acerca de
          </Link>

          <Link
            to="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "10px 18px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "10px",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.3)",
            }}
          >
            Contacto
          </Link>
        </nav>

        {/* HAMBURGER MENU (solo visual, si quieres lo hacemos funcional) */}
        <div style={{ display: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                display: "block",
                width: "30px",
                height: "4px",
                background: "white",
                borderRadius: "3px",
              }}
            ></span>
            <span
              style={{
                display: "block",
                width: "30px",
                height: "4px",
                background: "white",
                borderRadius: "3px",
              }}
            ></span>
            <span
              style={{
                display: "block",
                width: "30px",
                height: "4px",
                background: "white",
                borderRadius: "3px",
              }}
            ></span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
