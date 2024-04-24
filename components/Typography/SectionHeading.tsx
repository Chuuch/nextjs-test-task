import React from "react";
import { StyledSectionHeading } from "./elements";

interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ ...props }) => {
  return <StyledSectionHeading {...props} />;
};
