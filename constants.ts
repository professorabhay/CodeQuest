import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Portfolio",
    url: "https://abhayporwals.tech/",
    handle: "abhayporwals.tech",
  },
];

const title = "CodeQuest - Abhay Gupta";
const description =
  "Software Developer, Open Source Contributor, and Tech Enthusiast. I love to build things that make a difference.";
const image =
  "https://avatars.githubusercontent.com/u/76243309?v=4";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://abhayporwals.tech/",
    siteName: "CodeQuest - Abhay Gupta",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [image],
    creator: "@professorabhay",
  },
};
