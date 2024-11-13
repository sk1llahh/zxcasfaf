import React from "react";
import {MyTextStyles} from "./MyText.styles";
import {MyTextProps} from "./MyText.props";
import {theme as configTheme} from "antd";
import {GlobalToken} from "antd/es/theme/interface";
import {MyAliasToken} from "../../../assets/themes/defaultTheme";

const {useToken} = configTheme

export const MyText = ({
                         children,
                         ...props
                       }: MyTextProps) => {
  // @ts-ignore
  const {token}:{token: MyAliasToken} = useToken();

  return (
    <MyTextStyles {
                    ...{
                      ...props,
                    }
                  }>
      {children}
    </MyTextStyles>
  )
}
