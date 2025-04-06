import { AVAILABLE_THEMES, BASIC_COOKIE_CONFIGS, DEFAULT_THEME, THEME_COOKIE } from "../constants/constants"
import { getCookieValueByName } from "./getCookieByName"

export default () => ({
  defaultTheme: getCookieValueByName(THEME_COOKIE) || DEFAULT_THEME,
  availableThemes: AVAILABLE_THEMES,
  
  init() {
    const currentTheme = getCookieValueByName(THEME_COOKIE)

    if (currentTheme) {
      document.documentElement.classList.add(currentTheme)
    } else {
      document.cookie = `${THEME_COOKIE}=${DEFAULT_THEME}; ${BASIC_COOKIE_CONFIGS}`
      document.documentElement.classList.add(DEFAULT_THEME)
    }
  },

  selectTheme(selectedTheme: 'dark' | 'light') {
    this.defaultTheme = selectedTheme
    document.documentElement.classList.remove(selectedTheme === "dark" ? 'light' : 'dark')
    document.documentElement.classList.add(selectedTheme)
    document.cookie = `${THEME_COOKIE}=${selectedTheme}; ${BASIC_COOKIE_CONFIGS}`
  }
})