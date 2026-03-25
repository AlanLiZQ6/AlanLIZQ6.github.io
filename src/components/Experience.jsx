import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LanguageContext.jsx'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useScrollReveal()
  const { t } = useLang()

  return (
    <section id="experience" className={styles.experience}>
      <div className="container fade-in" ref={ref}>
        <p className="section-label">{t.experience.label}</p>
        <h2 className="section-title">{t.experience.title}</h2>

        <div className={styles.timeline}>
          {t.experience.items.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.period}>{exp.period}</span>
                <span className={styles.role}>{exp.role}</span>
              </div>
              <div className={styles.card}>
                <h3 className={styles.title}>{exp.title}</h3>
                <p className={styles.org}>{exp.org}</p>
                {exp.supervisor && (
                  <p className={styles.supervisor}>{exp.supervisor}</p>
                )}
                <ul className={styles.points}>
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
