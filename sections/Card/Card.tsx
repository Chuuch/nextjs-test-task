import Image from "next/image";
import * as S from "./elements";

export type Selection = {
  title: string;
  description: string;
  height: number;
  width: number;
  selectionColor: string;
  logo: React.ReactNode;
};

export interface CardProps {
  backgroundImage: {
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
  backgroundImage,
  videoImage,
  sectionTitle,
  sectionDescription,
  selections,
  ...props
}) => (
  <S.StyledContainer>
    <S.StyledSectionHeader {...props}>
      <S.StyledTextContainer>
        <S.StyledCardTitle>{sectionTitle}</S.StyledCardTitle>
        <S.StyledCardDescription>{sectionDescription}</S.StyledCardDescription>
      </S.StyledTextContainer>
      <S.StyledCardContainer backgroundImage={backgroundImage.src}>
        <S.StyledImageContainer>
          <Image
            layout="responsive"
            src={videoImage.src}
            alt={videoImage.alt}
            width={videoImage.width}
            height={videoImage.height}
          />
        </S.StyledImageContainer>
        <S.StyledSelectionsContainer>
          {selections.map((selection, index) => {
            return (
              <S.StyledSingleSelection
                key={index}
                selectionColor={selection.selectionColor}
                width={selection.width}
                height={selection.height}
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

export default Card;
