import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "../assets/lang/ru";
import kz from "../assets/lang/kz";
import {COOKIES_ENUM, LANG} from "../constants";
import {Cookies} from "react-cookie";

const cookies = new Cookies()

const cookiesLang = cookies.get(COOKIES_ENUM.LANG)

const resources = {
  [LANG.RU]: ru,
  [LANG.KZ]: kz,
}

i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    debug: process.env.NODE_ENV !== "production",
    lng: cookiesLang ? cookiesLang : LANG.RU,
    fallbackLng: cookiesLang ? cookiesLang : LANG.RU,
    defaultNS: "common",
    ns: "common",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
