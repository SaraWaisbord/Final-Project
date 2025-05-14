import React from 'react';
import '../../src/css/footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
//footer
const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-category yellow-title">אודות</h3>
            <ul className="footer-list">
              <li>אודות</li>
              <li>צור קשר</li>
              <li>בלוג</li>
              <li>הטבות ללקוחות LifeStyle</li>
              <li>plant-it - אתר העצים שלנו</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-category yellow-title">תקנונים ומשלוחים</h3>
            <ul className="footer-list">
              <li>מדיניות משלוחים</li>
              <li>תקנון אתר</li>
              <li>הסדרי נגישות</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-category yellow-title">קטגוריות מובילות</h3>
            <ul className="footer-list">
              <li>ציוד קמפינג</li>
              <li>אוהלים</li>
              <li>תיקי גב</li>
              <li>ציוד לשטח</li>
              <li>הדרכות טיולים</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-category yellow-title">שירות לקוחות</h3>
            <ul className="footer-list">
              <li>שירות לקוחות: 1-700-586-787</li>
              <li>שירות לקוחות חו"ל: +972-8-9474-0015</li>
              <li>דוא"ל: <a href="mailto:info@flowernet.co.il">info@travelNet.co.il</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={30} />
          </a>
        </div>

        <p className="footer-copy">© 2025 כל הזכויות שמורות</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
