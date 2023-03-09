export enum colorPropertyEnum {
  "primary",
  "secondary",
  "ocean",
  "light",
}
export type themeRecord = Record<keyof typeof colorPropertyEnum, string>;
export enum ThemeType {
  "base",
  "dark",
}
