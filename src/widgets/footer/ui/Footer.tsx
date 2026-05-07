import styles from "./Footer.module.scss";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4 className={styles.title}>CONTACT US</h4>
          <span className={styles.link}>Contact</span>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>LINKS</h4>
          <span className={styles.link}>Foxshop Tax Strategy</span>
          <span className={styles.link}>Jobs</span>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>FOLLOW US</h4>
          <div className={styles.icons}>
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Foxshop. All rights reserved.
      </div>
    </footer>
  );
};
