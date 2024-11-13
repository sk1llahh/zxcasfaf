import styled from "styled-components";
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";

export const Section1Styles = styled.div`
  display: flex;
  align-items: center;
  
  @media (min-width: 320px) and (max-width: 768px){
    padding-top: 90px;
  }

  .title {
    color: ${({theme}) => setThemeColor(theme.current, '#fff', DefaultTokenTheme.textTitle)};
    font-weight: 700;
    font-family: PTSerif-Bold;
  }

  .subtitle {
    color: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.disabled, DefaultTokenTheme.subtitleDark)};
    font-weight: 400;
  }

  .button_registration {
    padding: 10px 14px;

    span {
      font-size: 16px;
      line-height: 24px;
      color: #fff;
    }

  }

  .button_demo {
    padding: 10px 14px;

    span {
      font-size: 16px;
      line-height: 24px;
      color: ${DefaultTokenTheme.pressed};
    }
  }

  @media (min-width: 320px) and (max-width: 375px) {
    .title {
      font-size: 24px;
      line-height: 32px;
      display: block;
      text-align: center;
    }

    .subtitle {
      font-size: 16px;
      line-height: 24px;
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

    .subtitle {
      font-size: 16px;
      line-height: 24px;
      display: block;
      text-align: center;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .title {
      font-size: 32px;
      line-height: 40px;
    }

    .subtitle {
      font-size: 18px;
      line-height: 28px;
    }
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    .title {
      font-size: 64px;
      line-height: 72px;
    }

    .subtitle {
      font-size: 24px;
      line-height: 40px;
    }
  }

  @media (min-width: 1200px) {
    .title {
      font-size: 64px;
      line-height: 72px;
    }

    .subtitle {
      font-size: 24px;
      line-height: 40px;
    }
  }
`
export const BackgroundGradient = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  @media (max-width: 768px) {
    display: none;
  }
`
