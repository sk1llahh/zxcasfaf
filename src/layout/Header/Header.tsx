import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {HeaderProps} from "./Header.props";
import {MenuModal, StyledHeader, StyledMenu, StyledThemeSwitchButton} from "./Header.styles";
import {Col, Row, Image, Select, Menu, Button, Popover, Grid, Flex} from "antd";
import logo from '../../assets/icons/logo.svg'
import {LANG, ROUTE_PATH, THEME, THEME as THEMES_CONST} from "../../constants";
import {useLang, useTheme} from "../../hooks";
import {DarkModeIcon, LightModeIcon} from "../../assets";
import {MyButton, MyImage, MySelect, MyText} from "../../components";
import {gsap} from "gsap";
import {useLocation, useNavigate} from "react-router-dom";
import cl from "classnames";
import {MenuOutlined} from "@ant-design/icons";
import {setThemeColor} from "../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../assets/themes/defaultTheme";
import {RootState} from "../../store";
import {useSelector} from "react-redux";
import {selectStore} from "../../store/selector";

const {useBreakpoint} = Grid;

export const Header = (props: HeaderProps): React.ReactElement => {
  const {handleToggleTheme: toggleTheme, theme, themeConfig} = useTheme()
  const {handleChangeLang, lang} = useLang()
  const navigate = useNavigate()
  const screens = useBreakpoint();
  const location = useLocation();
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState<boolean>(false)
  const {common: {block: blockState}}: RootState = useSelector(selectStore)

  const backgroundRef = useRef(null)

  const menu = [
    {
      label: 'iTulek LMS',
      key: 'lms',
      children: [
        {
          label: 'Для корпоративного сектора',
          key: 'corp',
          path: ROUTE_PATH.LMS_CORP

        },
        {
          label: 'Для учебных заведений',
          key: 'study',
          path: ROUTE_PATH.LMS_STUDY

        },
      ],
    },
    {
      label: 'iTulek Math',
      key: 'math',
      path: ROUTE_PATH.MATH
    },
    {
      label: 'Online Test',
      key: 'test',
      path: ROUTE_PATH.ONLINE_TEST
    },
  ]

  const handleClickMenuItem = (path: any) => {
    navigate(path)
  }

  const langArray = [
    {
      key: LANG.RU,
      value: LANG.RU,
      label: 'RU'
    },
    {
      key: LANG.KZ,
      value: LANG.KZ,
      label: 'KZ'
    }
  ]

  const setBgFunc = (color: string) => {
    if (screens.md ) {
      gsap.to(backgroundRef.current, {
        duration: 1,
        background: color,
        ease: 'power1.inOut',
      });
    }
  }

  const handleToggleTheme = () => {
    toggleTheme()
  }

  const setBgCondition = () => {
    if (blockState.current) {
      setBgFunc(theme === THEME.LIGHT ? 'rgba(18, 10, 29, 0.8)' : 'rgba(255, 255, 255, 1)')
    } else {
      setBgFunc('transparent')
    }
  }

  useEffect(() => {
    setBgCondition()
  }, [blockState, theme, screens])

  return (
    <>
      <StyledHeader ref={backgroundRef}>
        <Row justify='center' align='middle'>
          <Col xs={22} sm={22} md={20} lg={19} xl={18} xxl={18}>
            <Row justify='space-between' align='middle'>
              <Col>
                <Row gutter={[
                  {
                    xs: 16,
                    sm: 16,
                    md: 16,
                    lg: 16,
                    xl: 16,
                    xxl: 16,
                  },
                  {
                    xs: 16,
                    sm: 16,
                    md: 16,
                    lg: 16,
                    xl: 16,
                    xxl: 16,
                  }
                ]} align='middle'>
                  {
                    !screens.md &&
                      <Col>
                          <MyButton icon={<MenuOutlined
                            style={{color: setThemeColor(theme, DefaultTokenTheme.icon, DefaultTokenTheme.disabled)}}/>}
                                    className={cl('menu_mobile')} type='text'
                                    onClick={() => setIsMobileMenuVisible(true)}/>
                      </Col>
                  }
                  <Col>
                    <MyImage src={logo} onClick={() => navigate(ROUTE_PATH.MAIN)} rootClassName={cl('logo')}/>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row gutter={[
                  {
                    xs: 16,
                    sm: 16,
                    md: 16,
                    lg: 16,
                    xl: 16,
                    xxl: 16,
                  },
                  {
                    xs: 16,
                    sm: 16,
                    md: 16,
                    lg: 16,
                    xl: 16,
                    xxl: 16,
                  }
                ]} justify='end' align='middle'>
                  {
                    screens.md &&
                      <Col>
                          <Row gutter={16} align='middle' className={cl('menu_desktop')}>
                            {
                              menu.map(item => (
                                <Col key={item.key}>
                                  {item.children ? (
                                    <Popover overlayStyle={{width: 250}} content={(
                                      <Row align='middle' gutter={[16, 16]}>
                                        {
                                          item.children.map(child => (
                                            <Col span={24} key={child.key}>
                                              <MyText style={{fontSize: 16, cursor: 'pointer'}} onClick={() => handleClickMenuItem(child.path)}>
                                                {child.label}
                                              </MyText>
                                            </Col>
                                          ))
                                        }
                                      </Row>
                                    )}>
                                      <MyText>
                                        {item.label}
                                      </MyText>
                                    </Popover>
                                  ) : (
                                    <MyText onClick={() => handleClickMenuItem(item.path)}>
                                      {item.label}
                                    </MyText>
                                  )}
                                </Col>
                              ))
                            }
                          </Row>
                      </Col>
                  }

                  <Col style={{marginLeft: 20}}>
                    <MySelect options={langArray} defaultValue={lang}
                              onSelect={(value, option) => handleChangeLang(value)} rootClassName={cl('lang')}/>
                  </Col>

                  <Col>
                    <StyledThemeSwitchButton onClick={handleToggleTheme}>
                      {theme === THEMES_CONST.LIGHT ? <LightModeIcon/> : <DarkModeIcon/>}
                    </StyledThemeSwitchButton>
                  </Col>

                  {
                    screens.md &&
                      <Col>
                          <MyButton type='primary' className={cl('button')}>
                              Написать нам
                          </MyButton>
                      </Col>
                  }

                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledHeader>

      <MenuModal open={isMobileMenuVisible} title={'Пункты меню'} onCancel={() => setIsMobileMenuVisible(false)}
                 centered={true} footer={false}>
        <Flex justify='center' align='center' style={{flexDirection: 'column'}} gap={16}>
          <MyButton type='text' onClick={() => handleClickMenuItem(ROUTE_PATH.LMS_CORP)}>
            iTulek LMS для корпоративного сектора
          </MyButton>
          <MyButton type='text' onClick={() => handleClickMenuItem(ROUTE_PATH.LMS_STUDY)}>
            iTulek LMS для учебных заведений
          </MyButton>
          <MyButton type='text' onClick={() => handleClickMenuItem(ROUTE_PATH.MATH)}>
            iTulek Math
          </MyButton>
          <MyButton type='text' onClick={() => handleClickMenuItem(ROUTE_PATH.ONLINE_TEST)}>
            iTulek Test
          </MyButton>
          <MyButton type='primary' style={{marginTop: 20}}>
            Написать нам
          </MyButton>
        </Flex>
      </MenuModal>
    </>
  );
};

