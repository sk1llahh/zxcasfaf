import {Section5Styles} from "./Section5.styles";
import {useTheme} from "../../../../hooks";
import {Col, Grid, List, Row} from "antd";
import {MyText} from "../../../common/MyText/MyText";
import {StyledListItem} from "../Section4/Section4.styles";
import {CheckOutlined} from "@ant-design/icons";
import imgPhones from "../../../../assets/images/pages/main/advantage_phones.png";
import TweenOne from "rc-tween-one";
import React from "react";
import c from "classnames";
import {THEME} from "../../../../constants";
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";


const {useBreakpoint} = Grid;
export const Section5 = () => {
  const screens = useBreakpoint();
  const {theme, themeConfig} = useTheme()

  const array = [
    'Индивидуальный репетитор;',
    'Полный контроль за процессом обучения;',
    'Более глубокое понимание учебного материала;',
    'Повышение успеваемости ребенка;',
    'Проверка и закрепление навыков;',
    'Система является отличным помощником для тех детей, которые пропускают уроки по болезни или другим уважительным причинам.',
  ]


  return (
    <Section5Styles className={c('section')}>
      <Row justify='center' align='middle' gutter={[16, 16]} style={{flex: 1}}>
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
                <TweenOne animation={{rotate: 10, duration: 1700}} repeat={-1} yoyo style={{}}>
              <Row justify="center" align="middle">
                  <img src={imgPhones} alt="imgPhone"/>
              </Row>
                </TweenOne>
            </Col>

            <Col xs={24} sm={24} md={11} lg={11} xl={11} xxl={9}>
              <Row gutter={[16, 32]}>
                <Col span={24}>
                  <MyText className="sectionTopTitle" weight={700}>
                    Преимущества
                  </MyText>
                </Col>
                <Col span={24}>
                  <MyText className="sectionTitle" weight={700} >
                    Для обучающихся
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
          </Row>
        </Col>
      </Row>
    </Section5Styles>
  )
}
