import {MyButtonStyles} from "./MyButton.styles";
import {MyButtonProps} from "./MyButton.props";
import React from "react";
import cl from "classnames";
import {useTheme} from "../../../hooks";

export const MyButton = ({
                           info = false,
                           warning = false,
                           children,
                           ...props
                         }: MyButtonProps): React.ReactElement => {
  const {theme, themeConfig} = useTheme()

  return (
    <MyButtonStyles {...props}>
      {children}
    </MyButtonStyles>
  )
}
