import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/" className={styles.navbarItem}>
          My App
        </Link>
      </div>
      <div className={styles.navbarMenu}>
        <div className={styles.navbarEnd}>
          <Link href="/" className={styles.navbarItem}>
            Home
          </Link>
          <Link href="/" className={styles.navbarItem}>
            About
          </Link>
          <Link href="/" className={styles.navbarItem}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
