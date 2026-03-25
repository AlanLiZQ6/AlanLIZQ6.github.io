import { createContext, useContext, useState, useEffect } from 'react'

/*
  Time-of-day color themes:
  - Dawn    (5–8):   warm rose-gold, soft awakening
  - Morning (8–12):  fresh blue, energetic
  - Afternoon (12–17): vibrant amber/gold, productive
  - Dusk    (17–20): sunset orange-pink, winding down
  - Night   (20–5):  deep indigo-purple, calm (default)
*/

const themes = {
  dawn: {
    name: 'dawn',
    label: 'Dawn',
    labelZh: '黎明',
    emoji: '🌅',
    accent: '#e8917a',
    accentDim: 'rgba(232, 145, 122, 0.12)',
    accentHover: '#d4796a',
    bg: '#0f0b0d',
    bgSecondary: '#151012',
    bgCard: '#1a1315',
    bgCardHover: '#201920',
    border: '#2a2024',
    borderHover: '#3d2f34',
  },
  morning: {
    name: 'morning',
    label: 'Morning',
    labelZh: '清晨',
    emoji: '☀️',
    accent: '#4a9eff',
    accentDim: 'rgba(74, 158, 255, 0.12)',
    accentHover: '#3588e8',
    bg: '#090b10',
    bgSecondary: '#0e1118',
    bgCard: '#131722',
    bgCardHover: '#181d28',
    border: '#1e2333',
    borderHover: '#2a3145',
  },
  afternoon: {
    name: 'afternoon',
    label: 'Afternoon',
    labelZh: '午后',
    emoji: '🌤️',
    accent: '#e8a84a',
    accentDim: 'rgba(232, 168, 74, 0.12)',
    accentHover: '#d49535',
    bg: '#0d0b08',
    bgSecondary: '#13100b',
    bgCard: '#1a1610',
    bgCardHover: '#201c15',
    border: '#2a2418',
    borderHover: '#3d3525',
  },
  dusk: {
    name: 'dusk',
    label: 'Dusk',
    labelZh: '黄昏',
    emoji: '🌇',
    accent: '#e07650',
    accentDim: 'rgba(224, 118, 80, 0.12)',
    accentHover: '#cc6340',
    bg: '#0d0908',
    bgSecondary: '#130e0b',
    bgCard: '#1a1310',
    bgCardHover: '#201815',
    border: '#2a2018',
    borderHover: '#3d3025',
  },
  night: {
    name: 'night',
    label: 'Night',
    labelZh: '夜晚',
    emoji: '🌙',
    accent: '#6c63ff',
    accentDim: 'rgba(108, 99, 255, 0.12)',
    accentHover: '#5a52e0',
    bg: '#0a0a0b',
    bgSecondary: '#111113',
    bgCard: '#16161a',
    bgCardHover: '#1c1c21',
    border: '#222228',
    borderHover: '#333340',
  },
}

function getThemeForHour(hour) {
  if (hour >= 5 && hour < 8) return 'dawn'
  if (hour >= 8 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 17) return 'afternoon'
  if (hour >= 17 && hour < 20) return 'dusk'
  return 'night'
}

function applyThemeToCSS(theme) {
  const root = document.documentElement
  root.style.setProperty('--accent', theme.accent)
  root.style.setProperty('--accent-dim', theme.accentDim)
  root.style.setProperty('--bg', theme.bg)
  root.style.setProperty('--bg-secondary', theme.bgSecondary)
  root.style.setProperty('--bg-card', theme.bgCard)
  root.style.setProperty('--bg-card-hover', theme.bgCardHover)
  root.style.setProperty('--border', theme.border)
  root.style.setProperty('--border-hover', theme.borderHover)
}

const TimeThemeContext = createContext()

export function TimeThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    return getThemeForHour(new Date().getHours())
  })

  const theme = themes[themeName]

  // Auto-update every minute
  useEffect(() => {
    applyThemeToCSS(theme)

    const interval = setInterval(() => {
      const newTheme = getThemeForHour(new Date().getHours())
      setThemeName(newTheme)
    }, 60000)

    return () => clearInterval(interval)
  }, [theme])

  // Allow manual override
  const cycleTheme = () => {
    const order = ['dawn', 'morning', 'afternoon', 'dusk', 'night']
    const idx = order.indexOf(themeName)
    const next = order[(idx + 1) % order.length]
    setThemeName(next)
  }

  // Reset to auto (time-based)
  const resetToAuto = () => {
    setThemeName(getThemeForHour(new Date().getHours()))
  }

  return (
    <TimeThemeContext.Provider value={{ theme, themeName, cycleTheme, resetToAuto, allThemes: themes }}>
      {children}
    </TimeThemeContext.Provider>
  )
}

export function useTimeTheme() {
  return useContext(TimeThemeContext)
}
