/* eslint-disable react/display-name */
import React from "react";
import styled from "styled-components";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const StyledSectionBigHeading = styled(
  React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
    <h1 {...props} ref={ref} />
  ))
)`
  font-family: Poppins;
  font-weight: 600;
  font-size: 3rem;
  line-height: 3.94rem;

  @media (max-width: 414px) {
    font-size: 2rem;
    margin: 2;
    line-height: 2.5rem;
  }
`;

export const StyledSectionHeading = styled(
  React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
    <h2 {...props} ref={ref} />
  ))
)`
  font-family: Poppins;
  font-size: 2.5rem;
  line-height: 4.375rem;
  font-weight: 600;

  @media (max-width: 414px) {
    font-family: Poppins;
    font-size: 1.5rem;
    line-height: 4.375rem;
    font-weight: 600;
  }
`;

export const StyledSectionSubheading = styled(
  React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
    <h3 {...props} ref={ref} />
  ))
)`
  font-family: Poppins;
  font-size: 2rem;
  line-height: 1.875rem;
  font-weight: 300;
`;

export const StyledSectionInnerHeading = styled(
  React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
    <h4 {...props} ref={ref} />
  ))
)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
`;

export const StyledSectionTinyHeading = styled(
  React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
    <h5 {...props} ref={ref} />
  ))
)`
  font-family: Poppins;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 300;
`;

export const StyledSectionParagraph = styled.p`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`;
