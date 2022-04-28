import styled from "styled-components";
import { Row as AntdRow, Col as AntdCol } from "antd";

const Row = styled(AntdRow)`
  border-bottom: 1px solid var(--gray-light);
`;

const Col = styled(AntdCol)`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export { Row, Col };
