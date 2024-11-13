import React, {createContext, useContext, useEffect, useState} from "react";
import {COOKIES_ENUM, THEME} from "../constants";
import {Cookies} from "react-cookie";
import {DarkTheme, LightTheme} from "../assets";
import {ConfigProvider} from "antd";
import {ThemeConfig} from "antd/es/config-provider/context";
import {ThemeProvider as StyledThemeProvider} from "styled-components";


const cookies = new Cookies();

interface ITheme {
  theme: THEME,
  handleToggleTheme: () => void,
  themeConfig: ThemeConfig | undefined,
}

const initialState: ITheme = {
  theme: THEME.LIGHT,
  handleToggleTheme: () => {
  },
  themeConfig: LightTheme
}

const ThemeContext = createContext<any>(initialState);

export const ThemeProvider = ({children}: any) => {
  const [theme, setTheme] = useState<THEME>(cookies.get(COOKIES_ENUM.THEMES) || THEME.DARK)
  const [themeConfig, setThemeConfig] = useState<ThemeConfig | undefined>(theme === THEME.LIGHT ? LightTheme : DarkTheme)

  useEffect(() => {
    const themeHandler = (options: any) => {
      if (options.name === COOKIES_ENUM.THEMES && options.value) {
        setTheme(options.value)
      }
    }

    cookies.addChangeListener((options) => {
      themeHandler(options)
    })

    return () => {
      cookies.removeChangeListener((options) => {
        themeHandler(options)
      })
    }
  }, [])

  const handleToggleTheme = () => {
    if (theme === THEME.DARK) {
      cookies.set(COOKIES_ENUM.THEMES, THEME.LIGHT)
      setThemeConfig(LightTheme)
    } else {
      cookies.set(COOKIES_ENUM.THEMES, THEME.DARK)
      setThemeConfig(DarkTheme)
    }
  }

  const values: ITheme = {
    theme,
    handleToggleTheme,
    themeConfig,
  }

  const styledTheme: {current: THEME} = {
    current: theme
  }

  return (
    <ThemeContext.Provider value={values}>
      <StyledThemeProvider theme={styledTheme}>
        <ConfigProvider theme={themeConfig}>
          {children}
        </ConfigProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
