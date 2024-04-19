import React from "react";
import { StyledSectionBigHeading } from "./elements";

interface SectionBigHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const SectionBigHeading: React.FC<SectionBigHeadingProps> = ({ ...props }) => {
  return <StyledSectionBigHeading {...props} />;
};

export default SectionBigHeading;
