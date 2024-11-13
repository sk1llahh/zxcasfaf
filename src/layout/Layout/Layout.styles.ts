import styled from "styled-components";
import {Layout} from "antd";

export const StyledLayout = styled(Layout)`
  .ant-layout {
    
    //@media (min-width: 320px) and (max-width: 992px) {
    //  .ant-layout-content {
    //    padding-top: 60px;
    //  }
    //}   
    
    @media (max-width: 992px) {
      overflow-x: hidden;
      overflow-y: auto;
    }
    @media (min-width: 992px) {
      overflow-x: hidden;
      overflow-y: hidden;
      max-height: 100vh;
    }
  }

  &.theme-light {

}

&.theme-dark {

}
`
