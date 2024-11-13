import {Section2Styles} from "./Section2.styles";
import {Button, Carousel, Col, Form, Grid, Input, Row} from "antd";
import React, {useMemo, useRef} from "react";
import c from "classnames";
import {useTheme} from "../../../../hooks";
import {MyText} from "../../../common/MyText/MyText";

import sectionTwoAvailableImg from '../../../../assets/images/pages/lmsStudy/section_two_available.png';
import sectionTwoResourcesImg from '../../../../assets/images/pages/lmsStudy/section_two_resources.png';
import sectionTwoGlobalImg from '../../../../assets/images/pages/lmsStudy/section_two_global.png';
import sectionTwoEducationImg from '../../../../assets/images/pages/lmsStudy/section_two_education.png';

const {useBreakpoint} = Grid;
export const Section2 = () => {
  const screens = useBreakpoint();
  const {theme, themeConfig} = useTheme()
  
  return (
    <Section2Styles className={c('section')}>
      <Row justify='center' align='middle' gutter={[16, 16]}>
        <Col xs={22} sm={22} md={20} lg={19} xl={18} xxl={18}>
          <Row justify="center" gutter={[
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
          ]}>
            <Row>
              <MyText className="title">
                Преимущества
              </MyText>
            </Row>
            <Row justify="space-between">
              <Col span={11} className="card">
                <Row>
                  <Col span={8} className="card-image">
                    <img src={sectionTwoAvailableImg} alt={'sectionTwoAvailableImg'}/>
                  </Col>
                  <Col span={14} className="card-body">
                    <Row>
                      <MyText className="card-title">
                        Доступность
                      </MyText>
                      <MyText className="card-text">
                        Обеспечение доступа к образованию из разных стран, а также для людей с ограниченными
                        возможностями.
                      </MyText>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={11} className="card">
                <Row>
                  <Col span={8} className="card-image">
                    <img src={sectionTwoResourcesImg} alt={'sectionTwoAvailableImg'}/>
                  </Col>
                  <Col span={14} className="card-body">
                    <Row>
                      <MyText className="card-title">
                        Разнообразие ресурсов
                      </MyText>
                      <MyText className="card-text">
                        Использование различных форматы обучения: тексты, видео, интерактивные задания, позволяют
                        улучшать
                        качество знаний.
                      </MyText>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={11} className="card">
                <Row>
                  <Col span={8} className="card-image">
                    <img src={sectionTwoGlobalImg} alt={'sectionTwoGlobalImg'}/>
                  </Col>
                  <Col span={14} className="card-body">
                    <Row>
                      <MyText className="card-title">
                        Глобальное образование
                      </MyText>
                      <MyText className="card-text">
                        Нетворкинг, позволяющий общаться и сотрудничать с учениками и профессорами со всего мира, обогащая свой опыт.
                      </MyText>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={11} className="card">
                <Row>
                  <Col span={8} className="card-image">
                    <img src={sectionTwoEducationImg} alt={'sectionTwoEducationImg'}/>
                  </Col>
                  <Col span={14} className="card-body">
                    <Row>
                      <MyText className="card-title">
                        Самостоятельное обучение
                      </MyText>
                      <MyText className="card-text">
                        Флексибильность дает возможность управлять своим графиком обучения, что помогает развивать самодисциплину и организованность.
                      </MyText>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Section2Styles>
  )
}
