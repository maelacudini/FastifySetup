const BASIC_COOKIE_CONFIGS = 'max-age=3600; samesite=strict; secure; path=/;'
const THEME_COOKIE = 'THEME_COOKIE'
const DEFAULT_THEME = 'dark'
const AVAILABLE_THEMES = ['dark', 'light'] as const
const LANG_COOKIE = 'LANG_COOKIE'
const AVAILABLE_LANGS = ['en', 'it'] as const
const DEFAULT_LANG: typeof AVAILABLE_LANGS[0] = 'en'

export {
  THEME_COOKIE, DEFAULT_THEME, AVAILABLE_THEMES, AVAILABLE_LANGS, DEFAULT_LANG, LANG_COOKIE, BASIC_COOKIE_CONFIGS
}