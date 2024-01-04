import { FlattenObjectKeys, transformObject } from "./../../styles/utils";
import { createTheme, createThemeContract, style } from "@vanilla-extract/css";
import * as button from "./tokens/colors";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/styles/sprinkles.css";

const themeObj = {
  colors: {
    button: button,
  },
};

// create button token theme
const themeVars = createThemeContract(themeObj);
createTheme(themeVars, themeObj);

const wrappedButton = { button };
type ButtonColor = FlattenObjectKeys<typeof wrappedButton>;
const buttonColors = {
  ...transformObject<ButtonColor>(themeVars.colors),
};

// create button sprinkles
const buttonColorProperties = defineProperties({
  properties: {
    color: buttonColors,
    backgroundColor: buttonColors,
    borderColor: buttonColors,
  },
  shorthands: {
    bgColor: ["backgroundColor"],
  },
});

const buttonSprinkles = createSprinkles(buttonColorProperties);

const base = style([sprinkles({ rounded: "radius-100" })]);

const buttonClass = recipe({
  base: base,
  variants: {
    buttonType: {
      primary: [sprinkles({})],
      secondary: {},
      tertiary: {},
      contrast: {},
    },
    size: {
      sm: [sprinkles({ paddingX: "spacing-250" })],
      md: [sprinkles({ paddingX: "spacing-400" })],
      lg: [sprinkles({ paddingX: "spacing-600" })],
    },
    iconOnly: {
      true: sprinkles({ paddingX: "spacing-0" }),
    },
  },
});
