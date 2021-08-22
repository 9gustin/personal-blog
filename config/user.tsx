import React from "react";
import { RiGithubLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import { BiCoffee } from "react-icons/bi";

interface User {
  title: React.ReactNode;
  pageTitle: string;
  mainTitle: string;
  theme: 'react' | 'angular' | 'vue' | 'js' | 'svelte' | null;
  description?: string;
  url?: string;
  mainImagePath?: string;
  links?: {
    name: string;
    icon: React.ReactNode;
    url?: string;
  }[]
}

const user: User = {
  title: "9gustin",
  description: 
    "Mi nombre empieza con 9 porque del 1 al 8 estaban ocupados. Soy Frontend Dev y cree este blog para escribir sobre cosas que me parezcan interesantes.",
  theme: "react",
  mainTitle: "Blog",
  pageTitle: " | 9gustin",
  url: 'https://9gustin.com',
  mainImagePath: 'https://github.com/9gustin/personal-blog/blob/main/resources/main-img.jpg?raw=true',
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
    // {
    //   name: '9gustin#7613',
    //   icon: <RiDiscordLine />
    // },
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
