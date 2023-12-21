import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const color = createVar();

const parent = style({});

const base = style([
  {
    width: 500,
    height: 50,
    borderWidth: 0,
    borderRadius: 8,
    color: color,
    cursor: "pointer",
    transition: "0.2s",
  },
]);

const variant = {
  primary: style([
    sprinkles({
      backgroundColor: "primary-50",
      borderColor: "color-border-04",
    }),
    typography["heading-02"],
    {
      vars: {
        [color]: vars.global.colors["primary-10"],
      },

      ":hover": {
        backgroundColor: vars.global.colors["primary-10"],
        vars: {
          [color]: vars.global.colors["primary-90"],
        },
      },
    },
  ]),
  gray: style([
    sprinkles({ backgroundColor: "primary-100" }),
    {
      vars: {
        [color]: vars.global.colors["primary-80"],
      },
    },
  ]),
};

export const button = recipe({
  base,
  variants: { variant, styleType: { filled: {}, tonal: {} } },
  compoundVariants: [
    {
      variants: { variant: "primary", styleType: "filled" },
      style: { borderWidth: 1, borderStyle: "solid" },
    },
  ],
  defaultVariants: {
    styleType: "filled",
  },
});
