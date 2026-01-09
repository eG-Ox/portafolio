import { motion } from "framer-motion";
import { ArrowRight, Database, BarChart, Code, FileSpreadsheet } from "lucide-react";
import styles from "./home.module.css";

export default function Home() {
  const skills = [
    { icon: <FileSpreadsheet size={32} />, title: "Control de Procesos", desc: "Validación de consumos y control de materia prima." },
    { icon: <Database size={32} />, title: "Análisis de Datos", desc: "Detección de inconsistencias y optimización operativa." },
    { icon: <BarChart size={32} />, title: "Business Intelligence", desc: "Dashboards en Power BI para toma de decisiones." },
    { icon: <Code size={32} />, title: "Desarrollo Web", desc: "Automatización y herramientas visuales con React." },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>
              Analista Junior <br />
              <span className={styles.heroSubtitle}>Datos, Producción y Web</span>
            </h1>
            <p className={styles.heroText}>
              Transformo datos en decisiones y optimizo procesos productivos mediante análisis riguroso y soluciones tecnológicas modernas.
            </p>
            <div className={styles.heroButtons}>
              <a href="#projects" className="btn btn-primary">
                Ver Proyectos <ArrowRight size={20} />
              </a>
              <a href="https://github.com/eG-Ox" target="_blank" className="btn btn-outline" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Lo que hago
          </motion.h2>

          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass ${styles.skillCard}`}
              >
                <div className={styles.skillIcon}>
                  {skill.icon}
                </div>
                <h3 className={styles.skillTitle}>{skill.title}</h3>
                <p className={styles.skillDesc}>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Teaser */}
      <section className="section">
        <div className="container">
          <div className={`glass ${styles.featuredCard}`}>
            <div className={styles.featuredContent}>
              <h2>Proyecto Destacado</h2>
              <h3 className={styles.featuredTitle}>Dashboard de Control de Produccion</h3>
              <p className={styles.featuredDesc}>
                Sistema integral para el control de Produccion segun sus procesos.
              </p>
              <a href="#projects" className="btn btn-primary">
                Ver todos los proyectos
              </a>
            </div>
            {/* Decorative background element */}
            <div className={styles.decorativeCircle} />
          </div>
        </div>
      </section>
    </div>
  )
}
