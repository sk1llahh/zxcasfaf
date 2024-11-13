import styled from "styled-components";
import {setThemeColor} from "../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../assets/themes/defaultTheme";

export const MainPage = styled.div`
  position: relative;
  width: 100%;
  flex: 1 0 auto;

  @media (max-width: 992px) {
    background-color: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.headerDark, '#fff')};
  }
`

export const AnimateBg = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  @media (max-width: 992px) { 
    display: none;
  }
`
export const DotsSidebar = styled.div`
  position: fixed;
  left: 44px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`
