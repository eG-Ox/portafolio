import { motion } from "framer-motion";
import { Github, FileText } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass ${styles.nav}`}
    >
      <div className={`container ${styles.container}`}>
        <a href="#" className={`logo ${styles.logo}`}>
          Marco Miñano Huaranga
        </a>

        <ul className={styles.navList}>
          <li><a href="#projects" className={styles.navLink}>Proyectos</a></li>
          <li>
            <a
              href="https://github.com/eG-Ox"
              target="_blank"
              rel="noreferrer"
              className={styles.githubLink}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="/portafolio/cv.pdf"
              target="_blank"
              className={`btn btn-primary ${styles.cvBtn}`}
            >
              <FileText size={18} />
              <span>CV</span>
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}
