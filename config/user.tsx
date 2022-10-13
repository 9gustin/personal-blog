import React from "react";
import { RiGithubLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import { BiCoffee } from "react-icons/bi";

interface User {
  title: React.ReactNode;
  pageTitle: string;
  mainTitle: string;
  theme: "react" | "angular" | "vue" | "js" | "svelte" | null;
  description?: string;
  richDescription?: React.ReactNode;
  url?: string;
  mainImagePath?: string;
  keywords?: string;
  favicon?: string;
  links?: {
    name: string;
    icon: React.ReactNode;
    url?: string;
  }[];
  emoji?: string;
}

const user: User = {
  title: "9gustin",
  emoji: "9️⃣",
  description:
    "Hola! soy Agus, desarrollador frontend. En este blog escribo sobre cositas que me parecen interesantes",
  richDescription: (
    <>
      <p>
        Hola! soy Agus, desarrollador frontend. En este blog escribo sobre cositas
        que me parecen interesantes. A veces escribo en ingles en{" "}
        <a
          className="theme-color"
          href="https://dev.to/9gustin"
          target="_blank"
          rel="noreferrer"
        >
          dev.to/9gustin
        </a>
        .
      </p>
    </>
  ),
  theme: "react",
  mainTitle: "Blog",
  pageTitle: " | 9gustin",
  url: "https://9gustin.com",
  keywords: "Artículos, recursos, Desarollo Web, Frontend, JavaScript, React",
  mainImagePath: "/main-img.jpg",
  favicon: "/favicon.ico",
  links: [
    {
      name: "Github",
      icon: <RiGithubLine />,
      url: "https://github.com/9gustin",
    },
    {
      name: "Twitter",
      icon: <RiTwitterLine />,
      url: "https://twitter.com/9gustin",
    },
    {
      name: "Linkedin",
      icon: <RiLinkedinLine />,
      url: "https://www.linkedin.com/in/9gustin/",
    },
    {
      name: "Cafecito",
      icon: <BiCoffee />,
      url: "https://cafecito.app/9gustin",
    },
  ],
};

export default user;
