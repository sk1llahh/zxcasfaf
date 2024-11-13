import styled from "styled-components";
import {List} from "antd";
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";
import imgNotebook from "../../../../assets/images/pages/main/advantage_notebook.png";

export const Section4Styles = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;

  .sectionTopTitle{
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .sectionTitle{
    font-size: 48px;
    font-family: 'PTSerif-Bold';
    color: ${({theme})=> setThemeColor(theme.current, '#fff', DefaultTokenTheme.textTitle)}
  }
  
  .imgAsianGirl{
    border-radius: 12px;
    overflow: hidden;
  }
  
  .imgNotebook{
    max-width: none !important;
    position: absolute;
    left: -29%;
    bottom: -30%;
  }
  
  .animatedBadgeContainer{
    background: #fff;
    padding: 12px;
    box-shadow: 0 8px 16px -2px #1B242C1F;
    border-radius: 8px;
    position: absolute;
    left: -15%;
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
  
  .imgLogo{
    width: 60px;
    height: 60px;
    position: absolute;
    left: 16px;
    top: 16px;
  }

  @media (min-width: 320px) and (max-width: 375px) {
    .container-main{
      flex-direction: column;
    }

    .sectionTitle{
      font-size: 28px;
    }

    .imgAsianGirl{
      position: relative;
      width: 80%;
      left: 3%;
    }

    .imgNotebook{
      height: 57%;
      bottom: -20%;
      left: -11%;
    }

    .imgLogo{
      left: 25%;
    }


    .animatedBadgeContainer {
      padding: 4px;
      left: -2%;
      bottom: 32%;
      .animatedBadgeItem {
        &:first-child {
          padding-bottom: 2px;
        }

        &:not(:first-child):not(:last-child) {
          padding-bottom: 2px;
          padding-top: 2px;
        }

        &:last-child {
          padding-top: 2px;
        }
      }
    }

  }
  @media (min-width: 375px) and (max-width: 768px) {
    
    .container-main{
      flex-direction: column;
    }
    
    .sectionTitle{
      font-size: 28px;
    }
    
    .imgAsianGirl{
      position: relative;
      width: 80%;
      left: 3%;
    }

    .imgNotebook{
      height: 57%;
      bottom: -20%;
      left: -11%;
    }
    
    .imgLogo{
      left: 25%;
    }
    

    .animatedBadgeContainer {
      padding: 4px;
      left: -2%;
      bottom: 32%;
      .animatedBadgeItem {
        &:first-child {
          padding-bottom: 2px;
        }

        &:not(:first-child):not(:last-child) {
          padding-bottom: 2px;
          padding-top: 2px;
        }

        &:last-child {
          padding-top: 2px;
        }
      }
    }
    
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .sectionTitle{
      font-size: 36px;
    }
    
    .imgAsianGirl{
      width: 80%;
    }
    
    .imgNotebook{
      width: 90%;
      bottom: -23%;
      left: -10%;
    }
    
    .imgLogo{
      left: 21%;
    }

    .animatedBadgeContainer {
      padding: 7px;
      left: 0%;
      .animatedBadgeItem {
        &:first-child {
          padding-bottom: 3px;
        }

        &:not(:first-child):not(:last-child) {
          padding-bottom: 3px;
          padding-top: 3px;
        }

        &:last-child {
          padding-top: 3px;
        }
      }
    }
  }

  @media (min-width: 992px) and (max-width: 1200px){
    .imgNotebook{
      height: 58%;
    }
    
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
  
  @media (min-width: 1200px) {

  }
  
`
export const StyledListItem = styled(List.Item)`
  border-block-end: 0 !important;

  .listCircleContainer{
    background: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.primary, DefaultTokenTheme.secondary)};
    width: 24px;
    height: 24px;
    position: relative;
    top: 6px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .listCircleIcon{
      color: ${({theme})=> setThemeColor(theme, '#fff', DefaultTokenTheme.primary)}
    }

    .listText{
      font-size: 18px;
      line-height: 32px;
      color: ${({theme})=> setThemeColor(theme, `#4A5154`, '#959FA3')}
    }
  }
`
