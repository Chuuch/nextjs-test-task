import React from "react";
import { StyledSectionHeading } from "./elements";

interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const SectionHeading: React.FC<SectionHeadingProps> = ({ ...props }) => {
  return <StyledSectionHeading {...props} />;
};

export default SectionHeading;
