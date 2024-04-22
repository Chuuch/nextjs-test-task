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

export type Selection = {
  title: string;
  description: string;
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
  selectionColor: string;
  logo: string;
};

export interface CardProps {
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
                    src={selection.logo} alt={selection.title} width={50} height={50}/>
                  </StyledSelectionImage>
                  <StyledSelectionTextContainer>
                    <StyledSelectionTitle>
                      {selection.title}
                    </StyledSelectionTitle>
                    <StyledSelectionDescription
                      dangerouslySetInnerHTML={{
                        __html: selection.description,
                      }}
                    ></StyledSelectionDescription>
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
