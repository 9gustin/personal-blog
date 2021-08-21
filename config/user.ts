import React from "react";

interface User {
  title: React.ReactNode;
  pageTitle: string;
  mainTitle: string;
  theme: 'react' | 'angular' | 'vue' | 'js' | 'svelte' | null;
  description?: string;
  url?: string;
  mainImagePath?: string;
}

const user: User = {
  title: "9gu ⚡",
  description: 
    "Mi nombre empieza con 9 porque del 1 al 8 estaban ocupados. Soy Frontend Dev y cree este blog para escribir sobre cosas que me parezcan interesantes.",
  theme: "react",
  mainTitle: "Blog",
  pageTitle: " | 9gustin",
  url: 'https://9gustin.com',
  mainImagePath: '/main-img.jpg'
}

export default user;
