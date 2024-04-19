/* eslint-disable react/display-name */
import React from "react";
import { StyledSectionSubheading } from "./elements";

interface SectionSubheadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const SectionSubheading = React.forwardRef<
  HTMLHeadingElement,
  SectionSubheadingProps
>((props, ref) => {
  return <StyledSectionSubheading {...props} ref={ref} />;
});

export default SectionSubheading;
