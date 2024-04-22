import * as S from "./elements";
import { StyledSectionBigHeading } from "@/components/Typography/elements";

export type Selection = {
  title: string;
  description: string;
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
  selectionColor: string;
  logo: React.ReactNode;
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
    <S.StyledContainer>
      <S.StyledSectionHeader {...props}>
        <S.StyledTextContainer>
          <StyledSectionBigHeading>{sectionTitle}</StyledSectionBigHeading>
          <S.StyledCardDescription>
            {sectionDescription}
          </S.StyledCardDescription>
        </S.StyledTextContainer>
        <S.StyledCardContainer backgroundImage={backGroundImage.src}>
          <S.StyledImageContainer
            backgroundImage={backGroundImage.src}
          ></S.StyledImageContainer>
          <S.StyledSelectionsContainer>
            {selections.map((selection, index) => {
              return (
                <S.StyledSingleSelection
                  mobileWidth={selection.mobileWidth}
                  mobileHeight={selection.mobileHeight}
                  width={selection.width}
                  key={index}
                  height={selection.height}
                  selectionColor={selection.selectionColor}
                >
                  <S.StyledSelectionImage>
                    {selection.logo}
                  </S.StyledSelectionImage>
                  <S.StyledSelectionTextContainer>
                    <S.StyledSelectionTitle>
                      {selection.title}
                    </S.StyledSelectionTitle>
                    <S.StyledSelectionDescription
                      dangerouslySetInnerHTML={{
                        __html: selection.description,
                      }}
                    ></S.StyledSelectionDescription>
                  </S.StyledSelectionTextContainer>
                </S.StyledSingleSelection>
              );
            })}
          </S.StyledSelectionsContainer>
        </S.StyledCardContainer>
      </S.StyledSectionHeader>
    </S.StyledContainer>
  );
};

export default Card;
