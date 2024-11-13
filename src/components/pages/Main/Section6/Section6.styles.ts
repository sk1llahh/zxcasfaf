import styled from "styled-components";
import {Button, Carousel} from "antd";
import quotesIcon from '../../../../assets/icons/quotes-icon.svg'
import {setThemeColor} from "../../../../utils/setThemeColor";

export const Section6Styles = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
`

export const StyledCarousel = styled(Carousel)`
  .slick-list {
    .slick-track {
      display: flex;
      gap: 10px;

      .slick-slide {
        width: 50% !important;
        padding: 32px;
        border-radius: 12px;
        position: relative;
        overflow: hidden;
        background-color: rgba(119, 61, 189, 0.1);

        &:before {
          content: '';
          width: 76px;
          height: 48px;
          background-image: url(${quotesIcon});
          position: absolute;
          left: 0;
          top: 0;
          z-index: 0;
          opacity: .3;
        }

        span {
          color: ${({theme}) => setThemeColor(theme.current, 'rgba(255, 255, 255, 1)', 'rgba(29, 28, 49, 1)')} !important;
        }

        .text {
          z-index: 1;
          position: relative;
          margin-bottom: 24px;
        }

        .title {
          border-top-width: 1px;
          border-top-style: solid;
          border-top-color: rgba(229, 231, 232, .3);
          padding-top: 24px;
          margin-bottom: 12px;
        }

        .subtitle {

        }

        &.slick-current {
          background-color: #773DBD;

          span {
            color: rgba(217, 217, 217, 1) !important;
          }
          
        }

      }
    }
  }

  .slick-dots {
    bottom: -50px;

    li {
      height: 8px !important;
      width: 70px !important;

      button {
        background: rgba(246, 241, 255, 1) !important;
      }

      &.slick-active {

        button {
          background: rgba(119, 61, 189, 1) !important;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 375px) { } 
  @media (min-width: 375px) and (max-width: 768px) { 
    .slick
  } 
  @media (min-width: 768px) and (max-width: 992px) { } 
  @media (min-width: 992px) and (max-width: 1200px) { } 
  @media (min-width: 1200px) { }
  
`

export const StyledCarouselButton = styled(Button)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  transition: all .5s;

  &:hover {
    background: rgba(119, 61, 189, 1) !important;

    .ant-btn-icon {
      .anticon {
        color: #fff !important;
      }
    }
  }
`
