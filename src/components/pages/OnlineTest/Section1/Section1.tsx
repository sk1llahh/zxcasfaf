import {Section1Styles} from "./Section1.styles";
import {Button, Carousel, Col, Form, Grid, Image, Input, Row} from "antd";
import {MyText} from "../../../common/MyText/MyText";
import React, {useMemo, useRef} from "react";
import c from "classnames";
import {useTheme} from "../../../../hooks";
import cl from "classnames";
import {MyButton} from "../../../common/MyButton/MyButton";
import notebookImg from "../../../../assets/images/pages/lmsStudy/section_one_notebook.png";


const {useBreakpoint} = Grid;
export const Section1 = () => {
  const screens = useBreakpoint();
  const {theme, themeConfig} = useTheme()

  return (
    <Section1Styles className={c('section')}>
      <Row justify='center' align='middle' gutter={[16, 16]}>
        <Col xs={22} sm={22} md={20} lg={19} xl={8} xxl={8}>
          <Row justify="center" align="middle" gutter={[
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
              <Row justify={{
                xs: 'center',
                sm: 'center',
                md: 'start',
                lg: 'start',
                xl: 'start',
                xxl: 'start',
              }}>
                <Col xs={22} sm={22} md={16} lg={15} xl={24} xxl={24}>
                  <MyText className={cl('title')}>
                    Мобильное приложение для тестирования
                  </MyText>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify={{
                xs: 'center',
                sm: 'center',
                md: 'start',
                lg: 'start',
                xl: 'start',
                xxl: 'start',
              }}>
                <Col xs={22} sm={22} md={16} lg={15} xl={24} xxl={24}>
                  <MyText className={cl('subtitle')}>
                    Мобильное приложение для тестирования
                  </MyText>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify={{
                xs: 'center',
                sm: 'center',
                md: 'start',
                lg: 'start',
                xl: 'start',
                xxl: 'start',
              }}>
                <Col span={6}>
                  <MyButton type='primary' className={cl('button')}>
                    appstore
                  </MyButton>
                </Col>
                <Col span={6}>
                  <MyButton type='primary' className={cl('button')}>
                    playmarket
                  </MyButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        {screens.md ? (
          <Col >
            <Image preview={false} src={notebookImg} alt="lms-study-notebook"/>
          </Col>
        ) : null}
      </Row>
    </Section1Styles>
  )
}
