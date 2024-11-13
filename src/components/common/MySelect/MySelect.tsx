import {MySelectStyles} from "./MySelect.styles";
import {MySelectProps} from "./MySelect.props";
import {useTheme} from "../../../hooks";

export const MySelect = ({...props}: MySelectProps) => {
  const {theme, themeConfig} = useTheme()

  return (
    //@ts-ignore
    <MySelectStyles {...props} className={theme}/>
  )
}
