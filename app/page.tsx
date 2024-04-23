"use client";
/* eslint-disable @next/next/no-page-custom-font */
import { HeroProps } from "@/sections/Hero/Hero";
import { Card, Hero } from "../sections";
import { CardProps } from "@/sections/Card/Card";
import { BriefIcon, SearchIcon, PitchIcon } from "../components";
import "./page.module.css";

const heroProps: HeroProps = {
  image: {
    src: "/img/heroimg.png",
    alt: "hero",
    width: 1000,
    height: 1680,
  },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const cardProps: CardProps = {
  backGroundImage: {
    src: "/img/background.png",
    alt: "background",
    width: 1920,
    height: 1080,
  },
  videoImage: {
    src: "/img/video.png",
    alt: "video",
    width: 1920,
    height: 720,
  },
  sectionTitle: "Managed agency selection",
  sectionDescription: "Strengthen your onboarding process",
  selections: [
    {
      title: "Brief",
      description:
        "Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.",
      width: 570,
      height: 32,
      selectionColor: "#FAFAFA",
      logo: <BriefIcon />,
    },
    {
      title: "Search",
      description:
        "In-depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.",
      width: 610,
      height: 32,
      selectionColor: "#F5F5F5",
      logo: <SearchIcon />,
    },
    {
      title: "Pitch",
      description:
        "Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting",
      width: 650,
      height: 32,
      selectionColor: "#ECECEC",
      logo: <PitchIcon />,
    },
  ],
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <Card {...cardProps} />
      </div>
    </>
  );
}
