import React from "react";
import StyledSectionContainer from "./elements";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const SectionContainer: React.FC<SectionContainerProps> = ({ ...props }) => {
  return <StyledSectionContainer {...props} />;
};

export default SectionContainer;
