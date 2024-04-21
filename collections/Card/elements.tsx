import React from "react";
import styled from "styled-components";

interface StyledSectionContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  topMargin?: number;
  bottomMargin?: number;
}

export const StyledContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSectionHeader = styled.div<StyledSectionContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ topMargin = 0 }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin = 0 }) => bottomMargin}rem;
`;

export const StyledTextContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  text-align: center;
  color: black;
  margin-top: 5rem;
  font-family: sans-serif;
`;

export const StyledCardContainer = styled(
  (
    props: React.HTMLAttributes<HTMLDivElement> & { backgroundImage: string }
  ) => <div {...props} />
)`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 15rem;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }
`;

export const StyledImageContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  display: flex;
  flex-direction: row;
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: 24rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-left: 12rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledCardDescription = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  font-family: Poppins;
  font-size: 1.5rem;
`;

export const StyledSelectionsContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  max-width: 1920px;
  margin-left: 6rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledSingleSelection = styled(
  (
    props: React.HTMLAttributes<HTMLDivElement> & {
      mobileWidth: number;
      mobileHeight: number;
      width: number;
      height: number;
      selectionColor: string;
    }
  ) => <div {...props} />
)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  min-height: 14rem;
  background-color: #eeeeee;
  margin-bottom: 1rem;
  margin-top: 2rem;
  padding: 2.6rem;
  border-radius: 10px;
  border: 0;
  box-sizing: border-box;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.selectionColor};

  &:hover {
    border: 3px solid #007fff;
    cursor: pointer;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: ${(props) => props.mobileWidth}px;
`;

export const StyledSelectionTextContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  display: flex;
  flex-direction: column;
`;

export const StyledSelectionTitle = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  font-family: Poppins;
  font-size: 1.8rem;
  line-height: 4.375rem;
  font-weight: 600;
  margin-left: 2.5rem;

  ${StyledSingleSelection}:hover & {
    text-decoration: underline;
    color: #007fff;
  }
`;

export const StyledSelectionDescription = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  font-family: Poppins;
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 500;
  margin-left: 2.5rem;
`;

export const StyledSelectionImage = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 4rem;
  max-height: 5rem;
  margin-left: 1.5rem;
`;