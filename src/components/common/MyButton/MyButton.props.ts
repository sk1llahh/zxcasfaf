import {ButtonProps} from "antd";
import React from "react";

export type MyButtonProps = {
  title?: string | React.ReactNode
  width?: number | string
  height?: number | string
  info?: boolean,
  warning?: boolean,
} & ButtonProps