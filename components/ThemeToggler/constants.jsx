import { RiMoonLine, RiSunLine } from "react-icons/ri";

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const THEME_KEY = 'SELECTED_THEME';

export const THEMES_LABELS = {
  [THEMES.DARK]: <RiSunLine />,
  [THEMES.LIGHT]: <RiMoonLine />,
}
