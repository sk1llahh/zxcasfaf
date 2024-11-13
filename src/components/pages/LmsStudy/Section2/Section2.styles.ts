import styled from "styled-components";
import {Button, Carousel} from "antd";
import quotesIcon from '../../../../assets/icons/quotes-icon.svg'
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";

export const Section2Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  .title {
    color: ${({theme}) => setThemeColor(theme.current, '#fff', DefaultTokenTheme.textTitle)};
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    font-family: PTSerif-Bold;
  }

  .card{
    padding: 24px;
    border: 1px solid #ECECEC;
    margin-right: 12px;
    border-radius: 8px;
    
    .card-image{
    }
    
    .card-body {
      margin-left: 4px;
      .card-title {
        margin-top: 8px;
        margin-bottom: 16px;
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        color: ${({theme}) => setThemeColor(theme.current, '#fff', DefaultTokenTheme.textTitle)};
      }

      .card-text {
        font-size: 18px;
        line-height: 24px;
        color: ${({theme}) => setThemeColor(theme.current, '#4A5154', '#959FA3')};
      }
    }
  }

  @media (min-width: 320px) and (max-width: 992px) {
    
  }

  @media (min-width: 320px) and (max-width: 375px) {
   
  }

  @media (min-width: 375px) and (max-width: 768px) {
    
  }

  @media (min-width: 768px) and (max-width: 992px) {
    
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    
  }

  @media (min-width: 1200px) {
    
  }
`
