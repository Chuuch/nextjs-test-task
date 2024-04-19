import { StyledButton } from "@/components/Button/elements";
import { SectionContainer } from "@/components/Containers";
import { SectionBigHeading, SectionSubheading } from "@/components/Typography";
import styled from "styled-components";

// Define a type for the props that your styled components will accept.
// For example, if your components accept a 'height' prop, you should include it in the type.
interface ContainerProps {
  height?: string; // Assuming height is a string, adjust as necessary
  [key: string]: any; // This allows for any other props to be passed through
}

export const StyledContainer = styled(
  ({ height, ...props }: ContainerProps) => <SectionContainer {...props} />
)`
  align-items: center;
`;

// Assuming Button component accepts a 'variant' and 'color' prop, you should define them in the type.
interface ButtonProps {
  variant?: string;
  color?: string;
  [key: string]: any; // This allows for any other props to be passed through
}

export const StyledGetStartedBtn = styled((props: ButtonProps) => (
  <StyledButton {...props} variant="contained" color="main" />
))`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

// For components that don't have specific props, you can use a generic type like React.HTMLAttributes<HTMLElement>
export const StyledTitle = styled(
  (props: React.HTMLAttributes<HTMLElement>) => <SectionBigHeading {...props} />
)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled(
  (props: React.HTMLAttributes<HTMLElement>) => <SectionSubheading {...props} />
)`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
`;

export const StyledCTAContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  display: flex;
`;

export const StyledImageContainer = styled(
  (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />
)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;
