import {
  StyledContainer,
  StyledCardContainer,
  StyledSectionHeader,
  StyledTextContainer,
  StyledImageContainer,
  StyledSelectionsContainer,
  StyledSingleSelection,
  StyledSelectionTitle,
  StyledSelectionDescription,
  StyledCardDescription,
  StyledSelectionImage,
  StyledSelectionTextContainer,
} from "./elements";
import Image from "next/image";
import { StyledSectionBigHeading } from "@/components/Typography/elements";
import { Selection } from "@/app/page";

interface CardProps {
  backGroundImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  videoImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  sectionTitle: string;
  sectionDescription: string;
  selections: Selection[];
}

const Card: React.FC<CardProps> = ({
  backGroundImage,
  videoImage,
  sectionTitle,
  sectionDescription,
  selections,
  ...props
}) => {
  return (
    <StyledContainer>
      <StyledSectionHeader {...props}>
        <StyledTextContainer>
          <StyledSectionBigHeading>{sectionTitle}</StyledSectionBigHeading>
          <StyledCardDescription>{sectionDescription}</StyledCardDescription>
        </StyledTextContainer>
        <StyledCardContainer backgroundImage={backGroundImage.src}>
          <StyledImageContainer backgroundImage={backGroundImage.src}>
            <Image
              layout="responsive"
              src={videoImage.src}
              alt="video"
              width={videoImage.width}
              height={videoImage.height}
            />
          </StyledImageContainer>
          <StyledSelectionsContainer>
            {selections.map((selection, index) => {
              return (
                <StyledSingleSelection
                  mobileWidth={selection.mobileWidth}
                  mobileHeight={selection.mobileHeight}
                  width={selection.width}
                  key={index}
                  height={selection.height}
                  selectionColor={selection.selectionColor}
                >
                  <StyledSelectionImage>
                    <Image
                      layout="responsive"
                      src={selection.logo}
                      alt="brief"
                      width={selection.logo.width}
                      height={selection.logo.height}
                    />
                  </StyledSelectionImage>
                  <StyledSelectionTextContainer>
                    <StyledSelectionTitle>
                      {selection.title}
                    </StyledSelectionTitle>
                    <StyledSelectionDescription>
                      {selection.description}
                    </StyledSelectionDescription>
                  </StyledSelectionTextContainer>
                </StyledSingleSelection>
              );
            })}
          </StyledSelectionsContainer>
        </StyledCardContainer>
      </StyledSectionHeader>
    </StyledContainer>
  );
};

export default Card;
