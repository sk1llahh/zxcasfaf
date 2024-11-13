import {THEME} from "../constants";

export const setThemeColor = (theme: any, lightColor: any, darkColor: any) => {
  if(theme === THEME.LIGHT){
    return lightColor
  } else {
    return darkColor
  }
}
