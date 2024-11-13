import c from "classnames";
import React from "react";
import {CardItem, Section2Styles} from "./Section2.styles";
import {Col, Row} from "antd";
import {MyText} from "../../../common/MyText/MyText";

import imgLms from '../../../../assets/images/pages/main/product_lms.png'
import imgMath from '../../../../assets/images/pages/main/product_math.png'
import imgTest from '../../../../assets/images/pages/main/product_test.png'
import {MyImage} from "../../../common/MyImage/MyImage";
import {MyButton} from "../../../common/MyButton/MyButton";
import cl from "classnames";

export const Section2 = () => {

  const array = [
    {
      img: imgLms,
      title: 'iTulek LMS',
      text: 'Управляйте обучением онлайн и помогайте бизнесу расти',
      link: '#'
    },
    {
      img: imgMath,
      title: 'iTulek Math',
      text: 'Обучение математике с помощью искусственного интелекта',
      link: '#'
    },
    {
      img: imgTest,
      title: 'iTulek Test ',
      text: 'Мобильное приложение для тестирования',
      link: '#'
    },
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
              xs: 12,
              sm: 12,
              md: 18,
              lg: 20,
              xl: 20,
              xxl: 20,
            }
          ]} justify='space-between'>
            <Col span={24}>
              <MyText className={cl('title')}>
                ПРОЕКТЫ КОТОРЫЕ МЫ СОЗДАЛИ
              </MyText>
            </Col>
            <Col span={24}>
              <MyText className={cl('subtitle')}>
                Продукты компании
              </MyText>
            </Col>
            <Col span={24}>
              <Row gutter={[12, 24]} justify={{
                xs: 'center',
                sm: 'center',
                md: 'space-between',
                lg: 'space-between',
                xl: 'space-between',
                xxl: 'space-between',
              }}>
                {
                  array.map((item, index) => (
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} key={index}>
                      <CardItem style={{
                        justifyContent: 'space-between',
                      }}>
                        <MyImage src={item.img} width={'100%'} style={{display: 'block'}}/>
                        <div style={{
                          display: 'flex',
                          flexDirection: "column",
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          height: '100%'
                        }} className={cl('card_content')}>
                          <MyText className={cl('card_title')}>
                            {item.title}
                          </MyText>

                          <MyText className={cl('card_subtitle')}>
                            {item.text}
                          </MyText>

                          <MyButton type='primary' ghost className={cl('card_button')}>
                            Подробнее
                          </MyButton>
                        </div>
                      </CardItem>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section2Styles>
  )
}
