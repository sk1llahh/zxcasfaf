import styled from "styled-components";
import {Button, Carousel} from "antd";
import quotesIcon from '../../../../assets/icons/quotes-icon.svg'
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";

export const Section3Styles = styled.div`
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

  .card {

    .card-image {
      width: 72px;
      height: 72px;
      border-radius: 50px;
      background: ${({theme}) => setThemeColor(theme.current, "#773DBD", '#F6F1FF')};;
    }

    .card-body {
      margin-left: 16px;

      .card-text {
        font-size: 20px;
        line-height: 32px;
        color: ${({theme}) => setThemeColor(theme.current, '#4A5154', '#959FA3')};
      }
    }
  }
`

