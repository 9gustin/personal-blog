import React, { useEffect, useState } from 'react';
import { THEMES, THEME_KEY, THEMES_LABELS } from './constants';
import isNavigatorDarkTheme from '../../utils/isNavigatorDarkTheme';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  hasBackground?: boolean;
}

function ThemeToggler({className, hasBackground}: Props) {
  const [selectedTheme, setTheme] = useState<string | undefined>();

  const handleChangeTheme = () => setTheme(THEMES[Object.keys(THEMES).find(theme => THEMES[theme] !== selectedTheme)])

  const actualTheme = () => localStorage.getItem(THEME_KEY);

  useEffect(() => {
    setTheme(actualTheme() || (isNavigatorDarkTheme() ? THEMES.DARK : THEMES.LIGHT));
  }, [])

  useEffect(() => {
    if (selectedTheme) {
      localStorage.setItem(THEME_KEY, selectedTheme);
      if (selectedTheme === THEMES.DARK) {
        document.body.classList.add(THEMES.DARK);
      } else {
        document.body.classList.remove(THEMES.DARK);
      }
    }
  }, [selectedTheme])

  return (
    <button onClick={handleChangeTheme} className={`${styles.button} ${className ?? ''} ${hasBackground ? styles.withBg : ''}`}>
      {THEMES_LABELS[selectedTheme]}
    </button>
  )
}

export default ThemeToggler;
