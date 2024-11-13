import {Section1Styles} from "./Section1.styles";
import {Button, Carousel, Col, Form, Grid, Input, Row} from "antd";
import {MyText} from "../../../common/MyText/MyText";
import React, {useMemo, useRef} from "react";
import c from "classnames";
import {useTheme} from "../../../../hooks";
import cl from "classnames";
import {MyButton} from "../../../common/MyButton/MyButton";
import {MyImage} from "../../../common/MyImage/MyImage";
import handImage from "../../../../assets/images/pages/math/handImage.png";

const {useBreakpoint} = Grid;
export const Section1 = () => {
  const screens = useBreakpoint();
  const {theme, themeConfig} = useTheme()

  return (
    <Section1Styles className={c('section')}>
      {
        screens.md &&
          <MyImage src={handImage} alt="background" wrapperStyle={{
            position: 'absolute',
            height: '40%',
            right: 0
          }} style={{height: '100%'}}/>
      }

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
              <Row justify={{
                xs: 'center',
                sm: 'center',
                md: 'start',
                lg: 'start',
                xl: 'start',
                xxl: 'start',
              }}>
                <Col xs={22} sm={22} md={16} lg={15} xl={14} xxl={14}>
                  <MyText className={cl('title')}>
                    Онлайн математика
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
                <Col xs={22} sm={22} md={16} lg={15} xl={14} xxl={14}>
                  <MyText className={cl('subtitle')}>
                    Электронная обучающая онлайн-система с искусственным интеллектом и адаптивными технологиями
                    персонализированного обучения школьников математике.
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
                <Col xs={22} sm={22} md={16} lg={15} xl={14} xxl={14}>
                  <MyButton type='primary' className={cl('button')}>
                    Войти в систему
                  </MyButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section1Styles>
  )
}
