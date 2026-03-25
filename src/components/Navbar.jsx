import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext.jsx'
import { useTimeTheme } from '../context/TimeThemeContext.jsx'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { lang, t, toggleLang } = useLang()
  const { theme, cycleTheme } = useTimeTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>ZL</a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.show : ''}`}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href="/Zhuoqi_Li_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.resume}
            </a>
          </li>
          <li className={styles.controls}>
            <button
              className={styles.controlBtn}
              onClick={toggleLang}
              title={lang === 'en' ? '切换中文' : 'Switch to English'}
            >
              {lang === 'en' ? '中' : 'EN'}
            </button>
            <button
              className={styles.controlBtn}
              onClick={cycleTheme}
              title={lang === 'en' ? theme.label : theme.labelZh}
            >
              {theme.emoji}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
