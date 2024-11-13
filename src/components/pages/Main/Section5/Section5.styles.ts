import styled from "styled-components";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";
import {setThemeColor} from "../../../../utils/setThemeColor";

export const Section5Styles = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  
  .sectionTopTitle{
    font-size: 16px;
    color: ${DefaultTokenTheme.disabled};
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .sectionTitle{
    font-size: 48px;
    color: ${({theme}) => setThemeColor(theme.current, '#fff', DefaultTokenTheme.textTitle)};
    font-family: 'PTSerif-Bold';
  }

  .animatedBadgeContainer{
    background: #fff;
    padding: 12px;
    box-shadow: 0 8px 16px -2px #1B242C1F;
    border-radius: 8px;
    position: absolute;
    left: -17%;
    bottom: 27%;

    .animatedBadgeItem{
      align-items: center;

      &:first-child{
        padding-bottom: 6px;
      }

      &:not(:first-child):not(:last-child){
        padding-bottom: 6px;
        padding-top: 6px;
      }

      &:last-child{
        padding-top: 6px;
      }

      .animatedBadgeItemImg{
        width: 28px;
        height: 28px;
        background-color: ${DefaultTokenTheme.secondary};
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .animatedBadgeItemText{
        margin-left: 12px;
        color: #1C1C1E;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 375px) {
    .container-main{
      flex-direction: column-reverse;
    }

    .sectionTitle{
      font-size: 28px;
    }
    
    img{
      width: 80%;
    }
  } 
  @media (min-width: 375px) and (max-width: 768px) {

    .sectionTitle{
      font-size: 28px;
    }
    
    .container-main{
      flex-direction: column-reverse;
    }
    
    img{
      width: 80%;
    }
    
  } 
  @media (min-width: 768px) and (max-width: 992px) {
    .sectionTitle{
      font-size: 36px;
    }

    .sectionTitle{
      font-size: 28px;
    }
  } 
  @media (min-width: 992px) and (max-width: 1200px) {
    .sectionTopTitle{
      font-size: 12px;
    }

    .sectionTitle{
      font-size: 32px;
    }

    .listText{
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media (min-width: 1200px) { }
  
`
