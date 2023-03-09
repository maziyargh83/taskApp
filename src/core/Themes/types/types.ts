export enum colorPropertyEnum {
  "body",
  "secondary",
  "tertiary",
  "primary",
  "light",
}
export type themeRecord = Record<keyof typeof colorPropertyEnum, string>;
export enum ThemeType {
  "base",
  "dark",
}
