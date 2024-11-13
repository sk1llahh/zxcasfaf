import {Section6Styles, StyledCarousel, StyledCarouselButton} from "./Section6.styles";
import {Button, Carousel, Col, Form, Grid, Input, Row} from "antd";
import {MyText} from "../../../common/MyText/MyText";
import React, {useMemo, useRef} from "react";
import c from "classnames";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
import {THEME} from "../../../../constants";
import {useTheme} from "../../../../hooks";
import {setThemeColor} from "../../../../utils/setThemeColor";
import {DefaultTokenTheme} from "../../../../assets/themes/defaultTheme";
import {Footer} from "../../../../layout";

const {useBreakpoint} = Grid;
export const Section6 = () => {
  const screens = useBreakpoint();
  const {theme, themeConfig} = useTheme()

  const carouselRef = useRef(null)

  const array = [
    {
      title: 'Лысенко Татьяна Николаевна',
      subtitle: 'КГУ «Гимназия имени Каныша Сатпаева»',
      text: 'Возможность для учащихся самостоятельно изучить материал или освежить в памяти ранее изученное. Растут возможности у учителя, а именно создание своих тестов и не только. Особая благодарность группе поддержки пользователей данной платформы. Вежливо, тактично и быстро получаешь ответы на свои вопросы.',
    },
    {
      title: 'Лысенко Татьяна Николаевна',
      subtitle: 'КГУ «Гимназия имени Каныша Сатпаева»',
      text: 'Возможность для учащихся самостоятельно изучить материал или освежить в памяти ранее изученное. Растут возможности у учителя, а именно создание своих тестов и не только. Особая благодарность группе поддержки пользователей данной платформы. Вежливо, тактично и быстро получаешь ответы на свои вопросы.',
    },
    {
      title: 'Лысенко Татьяна Николаевна',
      subtitle: 'КГУ «Гимназия имени Каныша Сатпаева»',
      text: 'Возможность для учащихся самостоятельно изучить материал или освежить в памяти ранее изученное. Растут возможности у учителя, а именно создание своих тестов и не только. Особая благодарность группе поддержки пользователей данной платформы. Вежливо, тактично и быстро получаешь ответы на свои вопросы.',
    },
    {
      title: 'Лысенко Татьяна Николаевна',
      subtitle: 'КГУ «Гимназия имени Каныша Сатпаева»',
      text: 'Возможность для учащихся самостоятельно изучить материал или освежить в памяти ранее изученное. Растут возможности у учителя, а именно создание своих тестов и не только. Особая благодарность группе поддержки пользователей данной платформы. Вежливо, тактично и быстро получаешь ответы на свои вопросы.',
    },
  ]

  const settings = {
    slidesToShow: 2,
    // vertical: true
  }

  const handleClickButton = (value: any) => {
    // @ts-ignore
    carouselRef?.current?.[value]()
  }

  return (
    <Section6Styles className={c('section')}>
      <Row justify='center' align='middle' gutter={[16, 16]}>
        <Col xs={22} sm={22} md={20} lg={19} xl={18} xxl={18}>
          <Row gutter={[
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
          ]} justify='space-between'>
            <Col span={24}>
              <Row justify='space-between' align='middle'>
                <Col>
                  <MyText size={48} weight={700} color={setThemeColor(theme, '#fff', DefaultTokenTheme.textTitle)}
                          style={{fontFamily: 'PTSerif-Bold'}}>
                    Отзывы
                  </MyText>
                </Col>

                <Col>
                  <Row gutter={[16, 16]}>
                    <Col>
                      <StyledCarouselButton icon={<ArrowLeftOutlined style={{color: themeConfig.token.disabled}}/>}
                                            onClick={() => handleClickButton('prev')}/>
                    </Col>

                    <Col>
                      <StyledCarouselButton icon={<ArrowRightOutlined style={{color: themeConfig.token.disabled}}/>}
                                            onClick={() => handleClickButton('next')}/>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <StyledCarousel {...settings} ref={carouselRef}>
                {
                  array.map((inner, innerIndex) => (
                    <div key={innerIndex}>
                      <div className={'text'}>
                        <MyText size={22}>
                          {inner.text}
                        </MyText>
                      </div>

                      <div className={'title'}>
                        <MyText size={24} weight={600}>
                          {inner.title}
                        </MyText>
                      </div>

                      <div className={'subtitle'}>
                        <MyText size={20}>
                          {inner.subtitle}
                        </MyText>
                      </div>
                    </div>
                  ))
                }
              </StyledCarousel>
            </Col>

          </Row>
        </Col>
      </Row>
      <Footer/>

    </Section6Styles>
  )
}
