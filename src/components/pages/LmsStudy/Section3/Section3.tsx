import {Section3Styles} from "./Section3.styles";
import {Button, Carousel, Col, Form, Grid, Input, Row} from "antd";
import React, {useMemo, useRef} from "react";
import c from "classnames";
import {useTheme} from "../../../../hooks";
import {MyText} from "../../../common/MyText/MyText";

import classRoomImg from "../../../../assets/images/pages/lmsStudy/section_three_class_room.png";

import admissionImg from "../../../../assets/icons/pages/lmsStudy/section_three_admission.svg";
import plansImg from "../../../../assets/icons/pages/lmsStudy/section_three_plans.svg";
import monitoringImg from "../../../../assets/icons/pages/lmsStudy/section_three_monitoring.svg";
import personalAccountingImg from "../../../../assets/icons/pages/lmsStudy/section_three_personal_accounting.svg";
import testingImg from "../../../../assets/icons/pages/lmsStudy/section_three_testing.svg";
import creationImg from "../../../../assets/icons/pages/lmsStudy/section_three_creation.svg";
import onlineVebinarsImg from "../../../../assets/icons/pages/lmsStudy/section_three_online_vebinars.svg";
import libraryImg from "../../../../assets/icons/pages/lmsStudy/section_three_library.svg";


const {useBreakpoint} = Grid;
export const Section3 = () => {
  const screens = useBreakpoint();
  const {theme, themeConfig} = useTheme()
  
  return (
    <Section3Styles className={c('section')}>
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
          ]}>
            <Col span={24}>

              <Row>
                <MyText className="title">
                  Функционал
                </MyText>
              </Row>
              <Row align="middle">
                <Col span={12}>
                  <Row style={{flexDirection: "column"}} justify="space-between">
                    <Col span={24} className="card">
                      <Row align="middle">
                        <Row align="middle" justify="center" className="card-image">
                          <img src={admissionImg} alt={'admissionImg'}/>
                        </Row>
                        <Col span={20} className="card-body">
                          <MyText className="card-text">Управление процессом приема, начиная от подачи заявок и
                            заканчивая
                            принятием решений о зачислении или отклонении.</MyText>
                        </Col>
                      </Row>
                    </Col>
                    <Col style={{paddingTop: 24}} span={24} className="card">
                      <Row align="middle">
                        <Row align="middle" justify="center" className="card-image">
                          <img src={plansImg} alt={'plansImg'}/>
                        </Row>
                        <Col span={20} className="card-body">
                          <MyText className="card-text">Планирование учебного процеса – расписание, журналы,
                            инфраструтура,
                            аналитика</MyText>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <img src={classRoomImg} alt="classRoomImg"/>
              </Row>

              <Row style={{paddingTop: 32}} align="middle" justify="space-between">
                <Col span={12} className="card">
                  <Row align="middle">
                    <Row align="middle" justify="center" className="card-image">
                      <img src={monitoringImg} alt={'admissionImg'}/>
                    </Row>
                    <Col span={20} className="card-body">
                      <MyText className="card-text">Управление и мониторинг, публикация тестов/экзаменов</MyText>
                    </Col>
                  </Row>
                </Col>
                <Col span={12} className="card">
                  <Row align="middle">
                    <Row align="middle" justify="center" className="card-image">
                      <img src={personalAccountingImg} alt={'plansImg'}/>
                    </Row>
                    <Col span={20} className="card-body">
                      <MyText className="card-text">Кадровый учет, подсчет стажа работы преподавателей</MyText>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row style={{paddingTop: 32}} align="middle" justify="space-between">
                <Col span={12} className="card">
                  <Row align="middle">
                    <Row align="middle" justify="center" className="card-image">
                      <img src={testingImg} alt={'testingImg'}/>
                    </Row>
                    <Col span={20} className="card-body">
                      <MyText className="card-text">Тестирование/экзамены</MyText>
                    </Col>
                  </Row>
                </Col>
                <Col span={12} className="card">
                  <Row align="middle">
                    <Row align="middle" justify="center" className="card-image">
                      <img src={creationImg} alt={'creationImg'}/>
                    </Row>
                    <Col span={20} className="card-body">
                      <MyText className="card-text">Создание, управление и публикация курсов</MyText>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row style={{paddingTop: 32}} align="middle" justify="space-between">
                <Col span={12} className="card">
                  <Row align="middle">
                    <Row align="middle" justify="center" className="card-image">
                      <img src={onlineVebinarsImg} alt={'onlineVebinarsImg'}/>
                    </Row>
                    <Col span={20} className="card-body">
                      <MyText className="card-text">Онлайн-вебинары в конференц комнатах</MyText>
                    </Col>
                  </Row>
                </Col>
                <Col span={12} className="card">
                  <Row align="middle">
                    <Row align="middle" justify="center" className="card-image">
                      <img src={libraryImg} alt={'libraryImg'}/>
                    </Row>
                    <Col span={20} className="card-body">
                      <MyText className="card-text">Библиотека – каталог образовательных ресурсов</MyText>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

          </Row>
        </Col>
      </Row>
    </Section3Styles>
  )
}
