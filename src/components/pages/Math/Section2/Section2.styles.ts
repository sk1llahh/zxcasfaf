import styled from "styled-components";
import {Button, Carousel, List} from "antd";
import quotesIcon from '../../../../assets/icons/quotes-icon.svg'
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";

export const Section2Styles = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;

  .title {
    color: ${({theme}) => setThemeColor(theme.current, '#fff', DefaultTokenTheme.textTitle)};
    font-weight: 700;
    font-family: PTSerif-Bold;
    display: block;
    text-align: center;
  }

  @media (min-width: 320px) and (max-width: 375px) {
    .title {
      font-size: 24px;
      line-height: 32px;
      display: block;
      text-align: center;
    }
  }

  @media (min-width: 375px) and (max-width: 768px) {
    .title {
      font-size: 28px;
      line-height: 36px;
      display: block;
      text-align: center;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .title {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    .title {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media (min-width: 1200px) {
    .title {
      font-size: 48px;
      line-height: 68px;
    }
  }
`

export const StyledListItem = styled(List.Item)`
  border-block-end: 0 !important;
`
