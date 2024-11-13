import styled from "styled-components";
import {Layout} from "antd";
import {setThemeColor} from "../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../assets/themes/defaultTheme";

export const StyledFooter = styled(Layout.Footer)`
  padding: 12px 0;
  // background: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.line, DefaultTokenTheme.line)};
  height: 164px;
  background-color: #f5f6f7;
  z-index: 1;
  position: absolute;
  bottom: 0;
  width: 100%;

  .footerTitle,
  .footerAddress,
  .footerSupport,
  .copyright{
    font-size: 16px;
    line-height: 24px;
    color: #191b1c;
  }
  
  .copyright{
    color: #626C70 !important;
  }
  
  .footerTitle {
    font-weight: 700;
  }

  .footerSupport {
    text-align: end;
  }
`
