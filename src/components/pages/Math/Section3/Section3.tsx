import {Section3Styles} from "./Section3.styles";
import {Button, Carousel, Col, Flex, Form, Grid, Input, Row} from "antd";
import {MyText} from "../../../common/MyText/MyText";
import React, {useMemo, useRef} from "react";
import c from "classnames";
import {useTheme} from "../../../../hooks";
import cl from "classnames";
import adaptiveIcon from '../../../../assets/icons/pages/math/adaptive-icon.svg'
import gameIcon from '../../../../assets/icons/pages/math/game-icon.svg'
import practiceIcon from '../../../../assets/icons/pages/math/practice-icon.svg'
import theoryIcon from '../../../../assets/icons/pages/math/theory-icon.svg'
import workLabIcon from '../../../../assets/icons/pages/math/work_lab-icon.svg'
import {MyImage} from "../../../common/MyImage/MyImage";

const {useBreakpoint} = Grid;
export const Section3 = () => {
  const screens = useBreakpoint();
  const {theme, themeConfig} = useTheme()

  const array = [
    {
      title: 'Теория',
      subtitle: 'Разбор лекции и обучающие примеры, которые содержат детальный текстовый и видео разбор',
      image: theoryIcon,
    },
    {
      title: 'Контрольная работа',
      subtitle: 'Автоматическая генерация и проверка типовых индивидуальных контрольных работ',
      image: workLabIcon,
    },
    {
      title: 'Адаптивное обучение',
      subtitle: 'Подбор подходящего теоретического и практического материала для ученика, в соответствии с его уровнем умений и знаний',
      image: adaptiveIcon,
    },
    {
      title: 'Геймофикация',
      subtitle: 'Увлечение интереса к предмету у учеников за счет мотивационных медалей, рейтингов и других способов из игровой индустрии',
      image: gameIcon,
    },
    {
      title: 'Практика',
      subtitle: 'Плавно нарастает сложность с разбором всех деталей и финальным мини тестом',
      image: practiceIcon,
    }
  ]

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
          ]} justify='space-between'>
            <Col span={24}>
              <MyText className={cl('title')}>
                Функционал
              </MyText>
            </Col>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                {
                  array.map(item => (
                    <Col key={item.title} xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                      <Row className={cl('item')} gutter={[
                        {
                          xs: 16,
                          sm: 16,
                          md: 16,
                          lg: 40,
                          xl: 40,
                          xxl: 40,
                        },
                        {
                          xs: 16,
                          sm: 16,
                          md: 16,
                          lg: 40,
                          xl: 40,
                          xxl: 40,
                        }
                      ]}>
                        <Col>
                          <Flex justify='center' align='center' className={cl('item_image')}>
                            <img src={item.image} alt={item.title}/>
                          </Flex>
                        </Col>
                        <Col span={18}>
                          <Row gutter={[8, 8]}>
                            <Col span={24}>
                              <MyText className={cl('item_title')}>
                                {item.title}
                              </MyText>
                            </Col>
                            <Col span={24}>
                              <MyText className={cl('item_subtitle')}>
                                {item.subtitle}
                              </MyText>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section3Styles>
  )
}
