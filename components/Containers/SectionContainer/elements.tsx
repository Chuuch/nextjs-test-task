import styled from "styled-components";
import React from "react";

interface StyledSectionContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  topMargin?: number;
  bottomMargin?: number;
}

const StyledSectionContainer = styled.div<StyledSectionContainerProps>`
  display: flex;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ topMargin = 0 }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin = 0 }) => bottomMargin}rem;
`;

export default StyledSectionContainer;
