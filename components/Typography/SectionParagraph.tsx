import React from "react";
import { StyledSectionParagraph } from "./elements";

interface SectionParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const SectionParagraph: React.FC<SectionParagraphProps> = ({ ...props }) => {
  return <StyledSectionParagraph {...props} />;
};

export default SectionParagraph;
