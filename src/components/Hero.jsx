import { useLang } from '../context/LanguageContext.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>{t.hero.greeting}</p>
        <h1 className={styles.name}>{t.hero.name}</h1>
        <h2 className={styles.tagline}>{t.hero.tagline}</h2>
        <p className={styles.description}>
          {t.hero.description}
          {t.hero.descriptionHighlight && (
            <span className={styles.highlight}> {t.hero.descriptionHighlight}</span>
          )}
          {t.hero.descriptionEnd}
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>{t.hero.viewWork}</a>
          <a href="#contact" className={styles.secondaryBtn}>{t.hero.getInTouch}</a>
        </div>
      </div>
      <div className={styles.decorLine} aria-hidden="true" />
    </section>
  )
}
