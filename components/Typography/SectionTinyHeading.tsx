import React from "react";
import { StyledSectionTinyHeading } from "./elements";

interface SectionTinyHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const SectionTinyHeading: React.FC<SectionTinyHeadingProps> = ({ ...props }) => {
  return <StyledSectionTinyHeading {...props} />;
};

export default SectionTinyHeading;
