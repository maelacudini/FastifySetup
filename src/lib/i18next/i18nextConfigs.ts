import i18nextMiddleware from 'i18next-http-middleware'
import i18next from 'i18next'
import i18nextfsBackend from 'i18next-fs-backend'
import path from 'path'
import { AVAILABLE_LANGS, DEFAULT_LANG, LANG_COOKIE } from '../../client/utils/constants/constants'
import { getRootDir } from '../../utils/functions/paths'

export default () => {  
  i18next
    .use(i18nextfsBackend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
      backend: { loadPath: path.join(getRootDir(), 'public', 'locales', '{{lng}}.json') },
      fallbackLng: DEFAULT_LANG,
      preload: AVAILABLE_LANGS,
      saveMissing: true,
      detection: {
        order: ['cookie', 'localStorage', 'querystring', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        lookupCookie: LANG_COOKIE,
        caches: ['cookie', 'localStorage'],
      },
    })

  return i18next 
}