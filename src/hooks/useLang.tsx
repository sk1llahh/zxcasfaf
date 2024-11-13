import React, {createContext, useContext, useEffect, useState} from "react";
import {COOKIES_ENUM, LANG} from "../constants";
import {Cookies} from "react-cookie";
import {useTranslation} from "react-i18next";

const cookies = new Cookies();

const initialState: any = {
  lang: LANG.RU,
  handleChangeLang: (value: string) => {
  }
}

const LangContext = createContext<any>(initialState);

export const LangProvider = ({children}: any) => {
  const [lang, setLang] = useState<string>(cookies.get(COOKIES_ENUM.LANG) || LANG.RU)
  const {i18n} = useTranslation();

  useEffect(() => {
    const langHandler = (options: any) => {
      if (options.name === COOKIES_ENUM.LANG && options.value) {
        setLang(options.value)
        i18n.changeLanguage(options.value);
        // window.location.reload()
      }
    }

    cookies.addChangeListener((options) => {
      langHandler(options)
    })

    return () => {
      cookies.removeChangeListener((options) => {
        langHandler(options)
      })
    }

  }, [])

  const handleChangeLang = (value: string) => {
    if (lang === LANG.RU) {
      cookies.set(COOKIES_ENUM.LANG, LANG.KZ)
      setLang(LANG.KZ)
    } else {
      cookies.set(COOKIES_ENUM.LANG, LANG.RU)
      setLang(LANG.RU)
    }
  }

  return (
    <LangContext.Provider value={{lang, handleChangeLang}}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)