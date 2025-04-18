import { AVAILABLE_LANGS, BASIC_COOKIE_CONFIGS, DEFAULT_LANG, LANG_COOKIE } from "../constants/constants"
import { getCookieValueByName } from "./getCookieByName"

export default () => ({
  selectedLanguage: getCookieValueByName(LANG_COOKIE) || DEFAULT_LANG,
  availableLangs: AVAILABLE_LANGS,
  
  init() {
    const currentLang = getCookieValueByName(LANG_COOKIE)    

    if (currentLang) {
      document.documentElement.lang = currentLang
    } else {
      document.cookie = `${LANG_COOKIE}=${DEFAULT_LANG}; ${BASIC_COOKIE_CONFIGS}`
      document.documentElement.lang = DEFAULT_LANG  
    }
  },

  selectLanguage(lang: 'en' | 'it') {
    if (lang === this.selectedLanguage) {
      return
    }
    this.selectedLanguage = lang
    document.documentElement.lang = lang
    document.cookie = `${LANG_COOKIE}=${lang}; ${BASIC_COOKIE_CONFIGS}`
    window.location.reload()
  }
})