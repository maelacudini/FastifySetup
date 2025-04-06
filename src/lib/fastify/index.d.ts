import { Application,
  Router, } from "express-serve-static-core"
import * as i18next from "i18next"

type I18next = i18next.i18n;
type App = Application | Router;

type I18NextRequest = {
  language: string;
  languages: string[];
  i18n: i18next.i18n;
  t: i18next.TFunction;
};

declare module 'fastify' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface FastifyRequest extends I18NextRequest {}
}