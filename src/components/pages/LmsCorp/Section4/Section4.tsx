import {Section4Styles} from "./Section4.styles";
import {Button, Carousel, Col, Form, Grid, Input, Row} from "antd";
import {MyText} from "../../../common/MyText/MyText";
import React, {useMemo, useRef} from "react";
import c from "classnames";
import {useTheme} from "../../../../hooks";

const {useBreakpoint} = Grid;
export const Section4 = () => {
  const screens = useBreakpoint();
  const {theme, themeConfig} = useTheme()
  
  return (
    <Section4Styles className={c('section')}>
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

          </Row>
        </Col>
      </Row>
    </Section4Styles>
  )
}
