import React from "react";
import { StyledSectionInnerHeading } from "./elements";

interface SectionInnerHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const SectionInnerHeading: React.FC<SectionInnerHeadingProps> = ({
  ...props
}) => {
  return <StyledSectionInnerHeading {...props} />;
};

export default SectionInnerHeading;
