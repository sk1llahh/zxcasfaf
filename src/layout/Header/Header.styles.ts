import styled from "styled-components";
import {Button, ButtonProps, Layout, Menu, MenuProps, Modal, Row} from "antd";
import {HeaderProps} from "./Header.props";
import {DefaultTokenTheme, MyAliasToken} from "../../assets/themes/defaultTheme";
import {setThemeColor} from "../../utils/setThemeColor";

export const StyledHeader = styled(Layout.Header)<HeaderProps>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0;
  height: auto;

  @media (min-width: 320px) and (max-width: 768px) {
    background-color: ${({theme}) => setThemeColor(theme.current, 'rgba(18, 10, 29, 0.8)', '#fff')};
    transition: all .5s ease-in-out;
  }

  .menu_mobile {
    width: 24px;
    height: 24px;
    padding: 0;
  }

  .menu_desktop {
    span {
      color: ${({theme}) => setThemeColor(theme.current, '#fff', DefaultTokenTheme.textTitle)};
      cursor: pointer;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      display: block;
    }
  }

  .lang {
    .ant-select-selector {
      background-color: transparent;
      border: none
    }
  }

  .button {

  }

  @media (min-width: 320px) and (max-width: 375px) {
    .logo {
      width: 100px;
      height: 28px;

      img{
        bottom: 2px;
        position: relative;
      }
    }
  }
  @media (min-width: 375px) and (max-width: 768px) {
    .logo {
      width: 100px;
      height: 28px;

      img{
        bottom: 2px;
        position: relative;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .logo {
      width: 100px;
      height: 28px;

      img{
        bottom: 2px;
        position: relative;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .logo {
      width: 100px;
      height: 28px;

      img{
        bottom: 2px;
        position: relative;
      }
    }
    .menu_desktop {
      span {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
  @media (min-width: 1200px) {
    .logo {
      width: 130px;
      height: 32px;

      img{
        bottom: 8px;
        position: relative;
      }
    }
    .menu_desktop {
      span {
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
`

export const StyledMenu = styled(Menu)<MenuProps>`
  background: transparent;
  border: none;
  font-size: 20px;

  .ant-menu-submenu {
    padding-inline: 40px;
  }

  &.light {
    color: rgba(246, 241, 255, 1);

    .ant-menu-item {
      &:hover {
        color: rgba(185, 156, 221, 1) !important;
      }
    }
  }

  &.dark {
    color: rgba(25, 27, 28, 1);

    .ant-menu-item {
      &:hover {
        color: rgba(81, 37, 143, 1) !important;
      }
    }
  }



`

export const StyledThemeSwitchButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;


  &:after {
    content: '';
    transition: all .2s;
    background-color: #9264CA;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.2;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .anticon {
    z-index: 1;

    svg {
      path {
        stroke: #B99CDD;
      }
    }
  }

  &:hover {
    &:after {
      opacity: 1;
    }

    .anticon {
      svg {
        path {
          stroke: #fff;
        }
      }
    }

  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 10px;
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
    padding: 12px;
  }
`

export const MenuModal = styled(Modal)`
  .ant-modal-body{
    margin-top: 20px;

    .ant-btn{
      span{
        font-size: 18px;
        line-height: 24px;
      }
    }
    
    .ant-btn-text{
      &:hover{
        background-color: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.secondary, DefaultTokenTheme.secondary)};
        color: ${({theme}) => setThemeColor(theme.current, DefaultTokenTheme.primary, DefaultTokenTheme.primary)};
      }
    }
  }
`
