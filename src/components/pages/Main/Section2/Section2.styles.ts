import styled from "styled-components";
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";

export const Section2Styles = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;

  .title {
    color: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.disabled, DefaultTokenTheme.disabled)};
    font-weight: 700;
    text-transform: uppercase;
  }

  .subtitle {
    color: ${({theme}) => setThemeColor(theme.current, '#fff', DefaultTokenTheme.textTitle)};
    font-weight: 700;
    font-family: PTSerif-Bold;
  }

  @media (min-width: 320px) and (max-width: 375px) {
    .title {
      font-size: 10px;
      line-height: 16px;
      display: block;
      text-align: center;
    }

    .subtitle {
      font-size: 24px;
      line-height: 32px;
      display: block;
      text-align: center;
    }
  }

  @media (min-width: 375px) and (max-width: 768px) {
    .title {
      font-size: 12px;
      line-height: 16px;
      display: block;
      text-align: center;
    }

    .subtitle {
      font-size: 28px;
      line-height: 36px;
      display: block;
      text-align: center;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .title {
      font-size: 12px;
      line-height: 16px;
    }

    .subtitle {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    .title {
      font-size: 12px;
      line-height: 16px;
    }

    .subtitle {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media (min-width: 1200px) {
    .title {
      font-size: 14px;
      line-height: 16px;
    }

    .subtitle {
      font-size: 48px;
      line-height: 68px;
    }
  }
`

export const CardItem = styled.div`
  width: 100%;
  background-color: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.headerDark, '#fff')};
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 10px 16px 0px rgba(34, 60, 80, 0.2);
    background-color: ${({theme}) => setThemeColor(theme.current, 'rgba(119, 61, 189, 0.1)', '#fff')} !important;
  }

  .card_title {
    color: ${({theme}) => setThemeColor(theme.current, '#fff', DefaultTokenTheme.textTitle)};
    text-align: center;
  }

  .card_subtitle {
    color: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.textDark, DefaultTokenTheme.textSubtitle)};
    text-align: center;
  }

  .card_button {
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
  }

  @media (min-width: 320px) and (max-width: 375px) {
    .card_content {
      gap: 24px;
      padding: 24px 16px;
    }

    .card_title {
      font-size: 18px;
      line-height: 24px;
    }

    .card_subtitle {
      font-size: 14px;
      line-height: 18px;
    }

    .card_button {
      padding: 10px 16px;
    }
  }
  @media (min-width: 375px) and (max-width: 768px) {
    .card_content {
      gap: 24px;
      padding: 24px 16px;
    }

    .card_title {
      font-size: 20px;
      line-height: 24px;
    }

    .card_subtitle {
      font-size: 16px;
      line-height: 24px;
    }

    .card_button {
      padding: 10px 16px;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .card_content {
      gap: 16px;
      padding: 24px 16px;
    }

    .card_title {
      font-size: 20px;
      line-height: 24px;
    }

    .card_subtitle {
      font-size: 14px;
      line-height: 18px;
    }

    .card_button {
      padding: 10px 16px;
    }
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .card_content {
      gap: 34px;
      padding: 40px 30px;
    }

    .card_title {
      font-size: 24px;
      line-height: 32px;
    }

    .card_subtitle {
      font-size: 14px;
      line-height: 18px;
    }

    .card_button {
      padding: 12px 24px;
    }
  }
  @media (min-width: 1200px) {
    .card_content {
      gap: 34px;
      padding: 40px 30px;
    }

    .card_title {
      font-size: 24px;
      line-height: 32px;
    }

    .card_subtitle {
      font-size: 14px;
      line-height: 18px;
    }

    .card_button {
      padding: 12px 24px;
    }
  }
`
