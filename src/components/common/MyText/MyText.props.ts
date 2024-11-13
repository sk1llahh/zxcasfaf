import React from "react";
import {TextProps} from "antd/es/typography/Text";

export interface MyTextProps extends TextProps{
  children?: React.ReactNode,
  color?: string,
  align?: 'left' | 'center' | 'right' | 'end',
  lineHeight?: string,
  size?: number,
  weight?: number
}

