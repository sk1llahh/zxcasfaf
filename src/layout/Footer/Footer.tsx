import {StyledFooter} from "./Footer.styles";
import {Col, Divider, Row} from "antd";
import React from "react";

import logo from "../../assets/icons/logo.svg"
import {MyText} from "../../components";

export const Footer = () => {

  return (
    <StyledFooter>
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
            <Col span={24} style={{paddingTop: 20, paddingBottom: 20}}>
              <Row align="middle" justify="space-between">
                <Row align="middle">
                  <div style={{paddingRight: 32}}>
                    <img src={logo} alt="footerLogo"/>
                  </div>
                  <MyText style={{paddingRight: 32}} className="footerTitle">
                    Частная компания <br/> «iTulek LTD»
                  </MyText>
                  <MyText className="footerAddress">
                    Республика Казахстан, г. Астана, район Есиль, <br/> ул. Гейдар Алиева, дом 1, кв. 1
                  </MyText>
                </Row>
                <MyText className="footerSupport">
                  +7 (701) 990 19 00 <br/>
                  support@itulek.com
                </MyText>
              </Row>
              <Divider style={{marginTop: 20, marginBottom: 18}} />
              <Row align="middle" justify="space-between">
                <Row>

                </Row>
                <MyText className="copyright">
                  2023 © Все права защищены
                </MyText>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledFooter>
  )
}
