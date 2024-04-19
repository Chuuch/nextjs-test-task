import React from "react";
import { StyledButton, StyledButtonText } from "./elements";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...(props as any)}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
