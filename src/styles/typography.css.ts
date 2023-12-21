import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const base = style({ fontFamily: vars.global.typographies.fonts.sans });

export const typography = styleVariants(vars.semantic.typographies, (typo) => [
  base,
  {
    fontSize: typo.fontSize,
    fontWeight: typo.fontWeight,
    lineHeight: typo.lineHeight,
  },
]);
