import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LanguageContext.jsx'
import styles from './About.module.css'

export default function About() {
  const ref = useScrollReveal()
  const { t } = useLang()

  return (
    <section id="about" className={styles.about}>
      <div className={`container fade-in ${styles.inner}`} ref={ref}>
        <p className="section-label">{t.about.label}</p>
        <h2 className="section-title">{t.about.title}</h2>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              {t.about.p1}
              <strong>{t.about.p1School1}</strong>
              {t.about.p1End}
              <strong>{t.about.p1School2}</strong>
              {t.about.p1End2}
            </p>
            <p>{t.about.p2}</p>
          </div>

          <div className={styles.details}>
            <div className={styles.detailCard}>
              <h4>{t.about.eduTitle}</h4>
              <div className={styles.edu}>
                <div>
                  <p className={styles.school}>{t.about.cmu}</p>
                  <p className={styles.degree}>{t.about.cmuDegree}</p>
                  <p className={styles.year}>{t.about.cmuYear}</p>
                </div>
                <div>
                  <p className={styles.school}>{t.about.uci}</p>
                  <p className={styles.degree}>{t.about.uciDegree}</p>
                  <p className={styles.year}>{t.about.uciYear}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
