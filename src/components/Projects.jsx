import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LanguageContext.jsx'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useScrollReveal()
  const { t } = useLang()

  return (
    <section id="projects" className={styles.projects}>
      <div className="container fade-in" ref={ref}>
        <p className="section-label">{t.projects.label}</p>
        <h2 className="section-title">{t.projects.title}</h2>

        <div className={styles.grid}>
          {t.projects.items.map((proj, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <svg className={styles.folderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span className={styles.period}>{proj.period}</span>
              </div>
              <h3 className={styles.title}>{proj.title}</h3>
              <p className={styles.desc}>{proj.description}</p>
              <ul className={styles.details}>
                {proj.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {proj.tags.map((tag, j) => (
                  <span key={j} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
