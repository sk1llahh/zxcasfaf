import styled from "styled-components";
import {Select} from "antd";

export const MySelectStyles = styled(Select)`
  .ant-select-selector {
    font-size: 18px !important;

  }


  &.light {
    color: #fff;

    .ant-select-selector {
      color: #fff;
    }

    .ant-select-arrow {
      color: rgba(98, 108, 112, 1);
    }
  }

  &.dark {
    color: rgba(25, 27, 28, 1);

    .ant-select-selector {
      color: rgba(25, 27, 28, 1);
    }

    .ant-select-arrow {
      color: rgba(98, 108, 112, 1);
    }
  }
`
