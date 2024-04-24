import { StyledButton } from "@/components/Button/elements";
import SectionContainer from "@/components/Containers/SectionContainer/SectionContainer";
import {
  SectionBigHeading,
  SectionSubheading,
} from "../../components/Typography";
import styled from "styled-components";

interface ContainerProps {
  height?: string;
  [key: string]: any;
}

export const StyledContainer = styled(
  ({ height, ...props }: ContainerProps) => <SectionContainer {...props} />
)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.1875rem;
    text-align: center;
    max-width: 375px;
  }
`;

interface ButtonProps {
  variant?: string;
  color?: string;
  [key: string]: any;
}

export const StyledGetStartedBtn = styled((props: ButtonProps) => (
  <StyledButton {...props} variant="contained" color="main" />
))`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTitle = styled(
  (props: React.HTMLAttributes<HTMLElement>) => <SectionBigHeading {...props} />
)`
  margin: 0;
  color: black;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.1875rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.1875rem;
    text-align: center;
  }

  @media only screen and (max-width: 414px) {
    font-size: 2rem;
    line-height: 1.875rem;
  }
`;

export const StyledDescription = styled(
  (props: React.HTMLAttributes<HTMLElement>) => <SectionSubheading {...props} />
)`
  margin: 1.563rem 0 0;
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.1875rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.1875rem;
    text-align: center;
  }

  @media only screen and (max-width: 414px) {
    font-size: 1.4rem;
    line-height: 1.875rem;
    text-align: center;
    margin: 1.563rem 0 0;
  }
`;

export const StyledTextContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  color: black;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  font-family: sans-serif;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledCTAContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.1875rem;
    text-align: center;
  }
`;

export const StyledImageContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  display: flex;
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`;
