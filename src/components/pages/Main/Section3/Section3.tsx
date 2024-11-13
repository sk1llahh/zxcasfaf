import c from "classnames";
import React from "react";
import {Section3Styles} from "./Section3.styles";
import {Col, Form, Grid, Input, Row} from "antd";
import {MyText} from "../../../common/MyText/MyText";
import imgCorp from '../../../../assets/images/pages/main/advantage_corp.png'
import imgStudy from '../../../../assets/images/pages/main/advantage_study.png'
import {MyButton} from "../../../common/MyButton/MyButton";
import cl from "classnames";

const {useBreakpoint} = Grid;
export const Section3 = () => {

  const array = [
    {
      img: imgCorp,
      title: 'Для корпоративного сектора',
      text: 'Позволяет управлять обучением в режиме онлайн,  развивать компетенции сотрудников и оценивать работу.',
      link: '#',
    },
    {
      img: imgStudy,
      title: 'Для учебных заведений',
      text: 'Организовывает учебно-воспитательный процесс, мониторинг, планирование и контроль образовательного процесса. ',
      link: '#',
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
                iTulek LMS
              </MyText>
            </Col>
            <Col span={24}>
              <MyText className={cl('subtitle')}>
                Преимущества платформы
              </MyText>
            </Col>
            <Col span={24}>
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
                {
                  array.map((item, index) => (
                    <Col span={12} key={index}>
                      <div style={{
                        borderRadius: 12,
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'end'
                      }} className='card'>
                        <img src={item.img} style={{
                          display: 'block',
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          bottom: 0,
                          top: 0,
                          width: '100%',
                          height: '100%',
                          zIndex: 0,
                        }} alt={'border'}/>
                        <div style={{
                          display: 'flex',
                          flexDirection: "column",
                          justifyContent: 'space-between',
                          zIndex: 1,
                        }} className={cl('card_content')}>
                          <MyText className={cl('card_title')}>
                            {item.title}
                          </MyText>

                          <MyText className={cl('card_text')}>
                            {item.text}
                          </MyText>

                          <MyButton className={cl('card_button')}>
                            Подробнее
                          </MyButton>
                        </div>
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </Col>
            <Col span={24}>
              <Row justify='center' gutter={[
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
              ]}>
                <Col span={24}>
                  <Row justify='center'>
                    <Col xs={24} sm={24} md={18} lg={16} xl={12} xxl={12}>
                      <MyText className={cl('form_text')}>
                        Заполните эту короткую форму, и мы свяжемся с вами в ближайшее время
                      </MyText>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify='center'>
                    <Col xs={24} sm={24} md={18} lg={16} xl={12} xxl={12}>
                      <Form className={'form'}>
                        <Row justify='center' align='middle' gutter={[16, 16]}>
                          <Col span={9}>
                            <Form.Item>
                              <Input placeholder='Ваше имя'/>
                            </Form.Item>
                          </Col>
                          <Col span={9}>
                            <Form.Item>
                              <Input placeholder='Email'/>
                            </Form.Item>
                          </Col>

                          <Col span={6}>
                            <Form.Item>
                              <MyButton type='primary' ghost htmlType='submit'>
                                Отправить
                              </MyButton>
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
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
