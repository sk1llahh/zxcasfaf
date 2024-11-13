import c from "classnames";
import {Section4Styles, StyledListItem} from "./Section4.styles";
import {Button, Col, Form, Grid, Input, List, Row} from "antd";
import {MyText} from "../../../common/MyText/MyText";
import React from "react";
import {useTheme} from "../../../../hooks";
import {CheckOutlined} from "@ant-design/icons";
import TweenOne from 'rc-tween-one';

import imgLogo from '../../../../assets/images/pages/main/advantage_main_logo.png'
import imgAsianGirl from '../../../../assets/images/pages/main/advantage_asian_girl.png'
import imgSdot from '../../../../assets/images/pages/main/advantage_sdot.png'
import imgNotebook from '../../../../assets/images/pages/main/advantage_notebook.png'
import {THEME} from "../../../../constants";
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";


const {useBreakpoint} = Grid;
export const Section4 = () => {
  const screens = useBreakpoint();
  const {theme, themeConfig} = useTheme()

  const array = [
    "Возможность формировать собственные уроки и проверочные работы;",
    "Автоматическое оценивание;",
    "Анализ и статистика работ учеников;",
    "Экономия времени преподавателя;",
    "Улучшение качества знаний учеников;",
    "Обратная связь учителя с учеником онлайн.",
  ]


  return (
    <Section4Styles className={c('section')}>
      <Row justify='center' align='middle' gutter={[16,16]}>
        <Col xs={22} sm={22} md={20} lg={19} xl={18} xxl={18}>
          <Row className="container-main" gutter={[
            {
              xs: 16,
              sm: 16,
              md: 16,
              lg: 14,
              xl: 16,
              xxl: 16,
            },
            {
              xs: 12,
              sm: 12,
              md: 18,
              lg: 20,
              xl: 20,
              xxl: 20,
            }
          ]} justify={{
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'space-between',
            xl: 'space-between',
            xxl: 'space-between',
          }} align='middle'>
            <Col xs={24} sm={24} md={11} lg={11} xl={11} xxl={9}>
              <Row gutter={[16, 32]}>
                <Col span={24}>
                  <MyText className="sectionTopTitle" weight={700} color={themeConfig.token.disabled}>
                    Преимущества
                  </MyText>
                </Col>
                <Col span={24}>
                  <MyText className="sectionTitle" weight={700} >
                    Для преподавателя
                  </MyText>
                </Col>
                <Col span={24}>
                  <List
                    dataSource={array}
                    renderItem={(item) => (
                      <StyledListItem>
                        {/*align='middle'*/}
                        <Row gutter={20} wrap={false}>
                          <Col>
                            <div className="listCircleContainer">
                              <CheckOutlined className="listCircleIcon" />
                            </div>
                          </Col>

                          <Col>
                            <MyText className="listText" size={22}
                                    color={setThemeColor(theme, DefaultTokenTheme.disabled, DefaultTokenTheme.textSubtitle)}
                                    >
                              {item}
                            </MyText>
                          </Col>
                        </Row>
                      </StyledListItem>
                    )}
                  />
                </Col>
              </Row>
            </Col>

            <Col xs={24} sm={24} md={13} lg={13} xl={13} xxl={9}>
              <Row align="middle" justify="center">
                <Row justify="end" style={{position: "relative"}}>

                  <img src={imgAsianGirl} className="imgAsianGirl" alt="bg"/>

                  <img src={imgNotebook} className="imgNotebook" alt="notebook"/>

                  <img src={imgLogo} className="imgLogo" alt="logo-fourth-section"/>


                  <TweenOne className="animatedBadgeContainer" animation={{rotate: 10, duration: 1700}} repeat={-1}
                            yoyo>
                    <Row className="animatedBadgeItem">
                      <Col className="animatedBadgeItemImg">i</Col>
                      <Col className="animatedBadgeItemText">Материалы</Col>
                    </Row>
                    <Row className="animatedBadgeItem">
                      <Col className="animatedBadgeItemImg">i</Col>
                      <Col className="animatedBadgeItemText">Задания</Col>
                    </Row>
                    <Row className="animatedBadgeItem">
                      <Col className="animatedBadgeItemImg">i</Col>
                      <Col className="animatedBadgeItemText">Тесты</Col>
                    </Row>
                    {/*<img src={imgSdot} alt="animated-badge"/>*/}
                  </TweenOne>
                </Row>

              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section4Styles>
  )
}
