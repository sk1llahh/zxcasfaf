import {Section2Styles} from "./Section2.styles";
import {Button, Carousel, Col, Form, Grid, Input, List, Row} from "antd";
import React, {useMemo, useRef} from "react";
import c from "classnames";
import {useTheme} from "../../../../hooks";
import {MyText} from "../../../common/MyText/MyText";
import cl from "classnames";
import {StyledListItem} from "./Section2.styles";
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";
import {CheckOutlined} from "@ant-design/icons";
import {MyImage} from "../../../common/MyImage/MyImage";
import notebookImage from "../../../../assets/images/pages/math/notebookImage.png"
import TweenOne from "rc-tween-one";

const {useBreakpoint} = Grid;
export const Section2 = () => {
  const screens = useBreakpoint();
  const {theme, themeConfig} = useTheme()

  const array = [
    'Экономия времени учителя;',
    'Увеличение качества знаний учеников;',
    'Более глубокое понимание учебного материала;',
    'Доступность в любой локации;',
    'Полный контроль за процессом обучения;',
    'Отсутствие необходимости нанимать репетитора;',
    'Повышение успеваемости ребенка.',
  ]

  return (
    <Section2Styles className={c('section')}>
      <Row justify='center' align='middle' gutter={[16, 16]}>
        <Col xs={22} sm={22} md={20} lg={19} xl={18} xxl={18}>
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
              xs: 24,
              sm: 24,
              md: 32,
              lg: 48,
              xl: 48,
              xxl: 48,
            }
          ]} justify='space-between'>
            <Col span={24}>
              <MyText className={cl('title')}>
                Преимущества
              </MyText>
            </Col>
            <Col span={24}>
              <Row align='middle' gutter={[40, 40]} justify='space-between'>
                <Col span={12}>
                  <TweenOne animation={{rotate: 10, duration: 1000}} repeat={-1} yoyo>
                    <MyImage src={notebookImage}/>
                  </TweenOne>
                </Col>
                <Col>
                  <List
                    dataSource={array}
                    renderItem={(item) => (
                      <StyledListItem>
                        <Row align='middle' gutter={20} wrap={false}>
                          <Col>
                            <div style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              background: `${setThemeColor(theme, DefaultTokenTheme.pressed, DefaultTokenTheme.secondary)}`,
                              width: 24,
                              height: 24,
                              borderRadius: '50%'
                            }}>
                              <CheckOutlined style={{color: setThemeColor(theme, '#fff', DefaultTokenTheme.primary)}}/>
                            </div>
                          </Col>

                          <Col>
                            <MyText size={22}
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
    </Section2Styles>
  )
}
