// src/components/FooterComponent.jsx
import React from 'react';
import '../../src/css/footer.css'; // Adjust the path as necessary

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">תודה שביקרתם אצלנו!</h2>
        <p className="footer-description">
          אנו מחויבים לספק לכם את השירות הטוב ביותר עם איכות ומחירים ללא תחרות.
        </p>
        <nav className="footer-nav">
          <a href="/about">אודות</a>
          <a href="/contact">צור קשר</a>
          <a href="/privacy">מדיניות פרטיות</a>
          <a href="/faq">שאלות נפוצות</a>
        </nav>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
        </div>
        <p className="footer-copy">© 2025 כל הזכויות שמורות</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
