import styled from "styled-components";
import React from "react";
import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "@/components";

interface StyledContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;
}

export const StyledContainer = styled(SectionContainer)<StyledContainerProps>`
  align-items: center;
  height: ${({ height }) => height};
`;

export const StyledGetStartedBtn = styled(Button).attrs({
  variant: "contained",
  color: "main",
})`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled(SectionBigHeading)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled(SectionSubheading)`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled.div`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
`;

export const StyledCTAContainer = styled.div`
  display: flex;
`;

export const StyledImageContainer = styled.div`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;
