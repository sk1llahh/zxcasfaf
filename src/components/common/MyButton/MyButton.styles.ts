import styled from "styled-components";
import {Button} from "antd";
import {darken, cssVar} from 'polished'
import {setThemeColor} from "../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../assets/themes/defaultTheme";

export const MyButtonStyles = styled(Button)`
  letter-spacing: 0.5px;

  &.ant-btn-primary {
    &.ant-btn-background-ghost {
      &:hover {
        color: #fff !important;
        background: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.primary, DefaultTokenTheme.primary)} !important;
        border-color: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.primary, DefaultTokenTheme.primary)} !important;
      }
    }
  }
`
