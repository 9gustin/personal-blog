import React from "react";
import { RiGithubLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import { BiCoffee } from "react-icons/bi";

interface User {
  title: React.ReactNode;
  pageTitle: string;
  mainTitle: string;
  theme: 'react' | 'angular' | 'vue' | 'js' | 'svelte' | null;
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
  }[]
}

const user: User = {
  title: "9gustin",
  description: 
    "Soy 9gustin porque [1-8]gustin estaban ocupados. Soy Frontend Dev y cree este blog para escribir sobre cosas que me parezcan interesantes.",
  richDescription: (<>
    <p>Soy 9gustin porque [1-8]gustin estaban ocupados. Soy Frontend Dev y cree este blog para escribir sobre cosas que me parezcan interesantes.</p>
    <p>visit <a className="theme-color" href="https://dev.to/9gustin"  target="_blank" rel="noreferrer">dev.to/9gustin</a> for the english version</p>
  </>),
  theme: "react",
  mainTitle: "Blog",
  pageTitle: " | 9gustin",
  url: 'https://9gustin.com',
  keywords: 'Artículos, recursos, Desarollo Web, Frontend, JavaScript, React',
  mainImagePath: '/main-img.jpg',
  favicon: '/favicon.ico',
  links: [
    {
      name: 'Github',
      icon: <RiGithubLine />,
      url: 'https://github.com/9gustin'
    },
    {
      name: 'Twitter',
      icon: <RiTwitterLine />,
      url: 'https://twitter.com/9gustin'
    },
    {
      name: 'Linkedin',
      icon: <RiLinkedinLine />,
      url: 'https://www.linkedin.com/in/vazquezagustin/'
    },
    {
      name: 'Cafecito',
      icon: <BiCoffee />,
      url: 'https://cafecito.app/9gustin'
    }
  ]
}

export default user;
