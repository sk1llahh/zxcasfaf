import styled from "styled-components";
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";

export const Section3Styles = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;

  .card {
    &:before {
      content: '';
      background-color: rgba(18, 10, 29, 0.8);
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }

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

  .form_text {
    color: ${({theme}) => setThemeColor(theme.current, '#fff', DefaultTokenTheme.textTitle)};
    font-weight: 600;
  }

  .card_title{
    color: #fff;
  }

  .card_text{
    color: ${DefaultTokenTheme.secondary};
  }

  .card_button{
    font-size: 16px;
    line-height: 24px;
    width: fit-content;
  }

  @media (min-width: 320px) and (max-width: 375px) {
    .form_text{
      font-size: 18px;
      line-height: 24px;
      display: block;
      text-align: center;
    }
    
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
    
    .card{
      height: 200px;
    }
    
    .card_content{
      gap: 14px;
      padding: 0 16px 16px 16px;
    }
    
    .card_title{
      font-size: 20px;
      line-height: 24px;
    }
    
    .card_text{
      font-size: 12px;
      line-height: 16px;
    }
  }
  @media (min-width: 375px) and (max-width: 768px) {
    .form_text{
      font-size: 20px;
      line-height: 24px;
      display: block;
      text-align: center;
    }
    
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

    .card{
      height: 240px;
    }

    .card_content{
      gap: 14px;
      padding: 0 16px 16px 16px;
    }

    .card_title{
      font-size: 20px;
      line-height: 24px;
    }

    .card_text{
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .form_text{
      font-size: 20px;
      line-height: 24px;
      display: block;
      text-align: center;
    }
    
    .title {
      font-size: 12px;
      line-height: 16px;
    }

    .subtitle {
      font-size: 32px;
      line-height: 40px;
    }

    .card{
      height: 254px;
    }

    .card_content{
      gap: 16px;
      padding: 0 24px 24px 24px;
    }

    .card_title{
      font-size: 20px;
      line-height: 24px;
    }

    .card_text{
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .form_text{
      font-size: 20px;
      line-height: 24px;
      display: block;
      text-align: center;
    }

    .title {
      font-size: 12px;
      line-height: 16px;
    }

    .subtitle {
      font-size: 32px;
      line-height: 40px;
    }

    .card{
      height: 254px;
    }

    .card_content{
      gap: 16px;
      padding: 0 24px 24px 24px;
    }

    .card_title{
      font-size: 20px;
      line-height: 24px;
    }

    .card_text{
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media (min-width: 1200px) {
    .form_text{
      font-size: 24px;
      line-height: 32px;
      display: block;
      text-align: center;
    }

    .title {
      font-size: 14px;
      line-height: 16px;
    }

    .subtitle {
      font-size: 48px;
      line-height: 68px;
    }

    .card{
      height: 376px;
    }

    .card_content{
      gap: 16px;
      padding: 0 40px 24px 40px;
    }

    .card_title{
      font-size: 24px;
      line-height: 32px;
    }

    .card_text{
      font-size: 18px;
      line-height: 24px;
    }
  }
`
