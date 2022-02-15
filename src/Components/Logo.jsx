import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: ${(props) => (props.size > 800 ? "block" : "none")};
  width: 80px;
  height: 80px;
  background: white;
  position: absolute;
  margin: 2rem;
`;
const Logo = ({ size = 1000 }) => {
  return <Div size={size}>Logo</Div>;
};
export default Logo;
