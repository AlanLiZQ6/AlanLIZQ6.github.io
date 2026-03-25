import { useLang } from '../context/LanguageContext.jsx'
import { useTimeTheme } from '../context/TimeThemeContext.jsx'
import styles from './Footer.module.css'

export default function Footer() {
  const { lang, t } = useLang()
  const { theme } = useTimeTheme()

  return (
    <footer className={styles.footer}>
      <p className={styles.credit}>{t.footer.credit}</p>
      <p className={styles.theme}>
        {theme.emoji} {lang === 'en' ? theme.label : theme.labelZh}
      </p>
    </footer>
  )
}
