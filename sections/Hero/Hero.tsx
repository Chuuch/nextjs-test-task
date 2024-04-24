import Image from "next/image";
import React from "react";
import * as S from "./elements";

export interface HeroProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  ctaText: string;
}

const Hero: React.FC<HeroProps> = ({
  image,
  title,
  description,
  ctaText,
  ...props
}) => {
  return (
    <S.StyledContainer {...props}>
      <S.StyledTextContainer>
        <S.StyledTitle>{title}</S.StyledTitle>
        <S.StyledDescription>{description}</S.StyledDescription>
        <S.StyledCTAContainer>
          <S.StyledGetStartedBtn>{ctaText}</S.StyledGetStartedBtn>
        </S.StyledCTAContainer>
      </S.StyledTextContainer>
      <S.StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </S.StyledImageContainer>
    </S.StyledContainer>
  );
};

export default Hero;
