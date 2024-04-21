"use client";
import Card from "@/collections/Card/Card";
/* eslint-disable @next/next/no-page-custom-font */
import Hero from "../sections/Hero/Hero";
import "./page.module.css";
interface HeroProps {
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

  selections: [
    {
      title: string;
      description: string;
      width: number;
      height: number;
      mobileWidth: number;
      mobileHeight: number;
      selectionColor: string;
      logo: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
    },
    {
      title: string;
      description: string;
      width: number;
      height: number;
      mobileWidth: number;
      mobileHeight: number;
      selectionColor: string;
      logo: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
    },
    {
      title: string;
      description: string;
      width: number;
      height: number;
      mobileWidth: number;
      mobileHeight: number;
      selectionColor: string;
      logo: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
    }
  ];
}

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
        "Complete brief writing or simple guidance on what to include, we've got you covered.",
      width: 570,
      height: 32,
      mobileWidth: 500,
      mobileHeight: 32,
      selectionColor: "#FAFAFA",
      logo: {
        src: "/img/brief.png",
        alt: "brief",
        width: 32,
        height: 32,
      },
    },
    {
      title: "Search",
      description:
        "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
      width: 670,
      height: 32,
      mobileWidth: 540,
      mobileHeight: 32,
      selectionColor: "#F5F5F5",
      logo: {
        src: "/img/project.png",
        alt: "project",
        width: 24,
        height: 24,
      },
    },
    {
      title: "Pitch",
      description:
        "Comprehensive pitch management, including comms, diary management and pitch hosting",
      width: 720,
      height: 32,
      mobileWidth: 580,
      mobileHeight: 32,
      selectionColor: "#ECECEC",
      logo: {
        src: "/img/discuss.png",
        alt: "discuss",
        width: 24,
        height: 24,
      },
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
