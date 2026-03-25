import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LanguageContext.jsx'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useScrollReveal()
  const { t } = useLang()

  return (
    <section id="skills" className={styles.skills}>
      <div className="container fade-in" ref={ref}>
        <p className="section-label">{t.skills.label}</p>
        <h2 className="section-title">{t.skills.title}</h2>

        <div className={styles.grid}>
          {t.skills.categories.map((cat, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.category}>{cat.category}</h3>
              <div className={styles.tags}>
                {cat.skills.map((skill, j) => (
                  <span key={j} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
