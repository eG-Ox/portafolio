import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`glass ${styles.card}`}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <div className={styles.tagsContainer}>
          {project.tech.map((t, i) => (
            <span
              key={i}
              className={styles.tag}
            >
              {t}
            </span>
          ))}
        </div>
        <p className={styles.cardDesc}>{project.description}</p>
      </div>

      <div className={styles.cardFooter}>
        <a
          href={project.link}
          target="_blank"
          className={`btn btn-outline ${styles.codeBtn}`}
          rel="noreferrer"
        >
          <Github size={16} />
          <span>Código</span>
        </a>
        {/* If there was a live demo link, we could add it here */}
      </div>
    </motion.div>
  )
}
