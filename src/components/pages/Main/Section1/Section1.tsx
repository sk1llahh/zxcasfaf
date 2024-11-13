import {BackgroundGradient, Section1Styles} from "./Section1.styles";
import {Col, Grid, Row} from "antd";
import React, {useEffect, useRef} from "react";
import {MyText} from "../../../common/MyText/MyText";
import c from "classnames";
import {useTheme} from "../../../../hooks";
import {THEME} from "../../../../constants";
import {gsap} from "gsap";
import {MyButton} from "../../../common/MyButton/MyButton";
import bg from './../../../../assets/images/pages/main/section1-bg-img.png';
import {MyImage} from "../../../common/MyImage/MyImage";
import cl from "classnames";

const {useBreakpoint} = Grid;
export const Section1 = () => {
  const screens = useBreakpoint();
  const {theme} = useTheme()
  const backgroundRef = useRef(null)

  const COLOR_LIGHT = '7,18,53'
  const COLOR_DARK = '255, 255, 255'

  const LIGHT_GRADIENT = `linear-gradient(90deg, rgba(${COLOR_LIGHT},1) 0%, rgba(${COLOR_LIGHT},1) 45%, rgba(${COLOR_LIGHT},0.9) 55%, rgba(${COLOR_DARK},0) 100%)`
  const DARK_GRADIENT = `linear-gradient(90deg, rgba(${COLOR_DARK},1) 0%, rgba(${COLOR_DARK},1) 45%, rgba(${COLOR_DARK},0.9) 55%, rgba(${COLOR_DARK},0) 100%)`

  useEffect(() => {
    const targetGradient = theme === THEME.LIGHT ? LIGHT_GRADIENT : DARK_GRADIENT

    if(screens.md){
      gsap.to(backgroundRef.current, {
        duration: 1,
        background: targetGradient ? targetGradient : 'transparent',
        ease: 'power1.inOut',
      });
    }
  }, [theme, screens])


  return (
    <Section1Styles className={c('section')}>
      {
        screens.md &&
        <MyImage src={bg} alt="background" wrapperStyle={{
          position: 'absolute',
          height: '100%',
          width: 'max-content',
          right: 0
        }} style={{height: '100%'}}/>
      }

      <BackgroundGradient ref={backgroundRef}/>


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
                    Управление образовательным процессом
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
                    Доверьте онлайн-обучения платформе iTulek, сделайте обучение проще и эффективнее
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
                  <Row gutter={[16, 16]} justify={{
                    xs: 'center',
                    sm: 'center',
                    md: 'start',
                    lg: 'start',
                    xl: 'start',
                    xxl: 'start',
                  }}>
                    <Col>
                      <MyButton type='primary' className={cl('button_registration')}>
                        <MyText>
                          Регистрация
                        </MyText>
                      </MyButton>
                    </Col>

                    <Col>
                      <MyButton className={cl('button_demo')}>
                        <MyText>
                          Получить демо
                        </MyText>
                      </MyButton>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section1Styles>
  )
}
